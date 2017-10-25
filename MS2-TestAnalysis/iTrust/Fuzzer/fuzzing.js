var fs = require('fs');
var path = require('path');
var http = require('http');
var cp = require('child_process');
var recursiveReadSync = require('recursive-readdir-sync');

var files = [];
var java_files = [];

try {
    files = recursiveReadSync('/home/ubuntu/iTrust-v23/iTrust/src/main/edu/ncsu/csc/itrust');
} catch (err) {
    if (err.errno === 34) {
        console.log('Path does not exist');
    } else {
        throw err;
    }
}

console.log('Files array:', files.length);

//loop over resulting files 
// for (var i = 0, len = files.length; i < len; i++) {
//     console.log('Found file %d - %s', (i+1), files[i]);
// }

// Filter out files with .java extension
for(var i in files){
    if(path.extname(files[i]) === ".java"){
        java_files.push(files[i]);
    }
}

//console.log('Filtered file list');
//console.log(java_files);
//console.log(java_files.length);

var fuzz_file_content = function(filePath){
    var lines = fs.readFileSync(filePath, 'utf8').split('/\r?\n/');
    fs.writeFileSync(filePath, "", {'encoding': 'utf8'});
    //console.log(lines);
    var equality_seed = Math.random();
    var binary_seed = Math.random();
    var comparison_seed = Math.random();
    var str_seed = Math.random();

    lines.forEach(line => {
        //console.log(line);
        // Randomly replace string content
        // Ensuring that if @ for emails or / for file path is contained, content is not modified
        if(str_seed > 0.6 && line.indexOf("@") == -1 && line.indexOf("/") == -1){
            // regex obtained from https://stackoverflow.com/questions/12367126/how-can-i-get-a-substring-located-between-2-quotes
            line = line.replace('/"([^"]+)"/', "abcdef0123456789ABCDEF");
        }
        // Replace instances of == with != or != with == based on seed generated.
        if(equality_seed > 0.05){
            line = line.replace(/==/g, '!=');
        }else{
            line = line.replace(/!=/g, '==');
        }

        // Replace instances of > with < or < with > based on seed generated
        if(comparison_seed > 0.20 && (line.indexOf("while") !== -1 || line.indexOf("for") !== -1) && line.includes(">") && !line.match(/<.+>/) && !line.match(/>>/) && !line.match(/->/)){
            line = line.replace('>', '<');
        }else if((line.indexOf("while") !== -1 || line.indexOf("for") !== -1) && line.includes("<") && !line.match(/<.+>/) && !line.match(/<</)){
            line = line.replace('<', '>');
        }

        //Swap 0 and 1 
        //if(binary_seed > 0.5 && line.indexOf('1') !== -1){
        //    line = line.replace('1', '0');
        //}else{
        //    line = line.replace('0', '1');
        //}       
        if(line != '\r'){
            line += '\n';
        }
		
        fs.appendFileSync(filePath, line, {encoding: 'utf8'});
    });
}

var runFuzzer = function(num){
    var jenkins_server = "<Enter Appropriate IP>";
    var master_sha1 = "1fa2c51465380dd93d3313abc3a46c5c09830f1c";
    var branch_sha1 = "2a7f89b3f3b38d6cdf0a7fc28f41853aff19c412";
    
    for(var i = 0; i < num; i++){
        var command = "git checkout " + branch_sha1;
        //cp.execSync(command);
        java_files.forEach(function(file){
            if(Math.random() > 0.75){
                fuzz_file_content(file);
            }
        });

        cp.execSync("cd iTrust-v23 && git stash");
        cp.execSync("cd iTrust-v23 && git checkout fuzzer ");
        cp.execSync("cd iTrust-v23 && git checkout stash -- .");
        var commit_msg = "Fuzzing iteration - " + (i + 1); 
        cp.execSync("cd iTrust-v23 && git commit -m '" + commit_msg + "'");
        cp.execSync("cd iTrust-v23 && git push origin fuzzer");
        cp.execSync("cd iTrust-v23 && git stash drop");
        var new_sha1 = cp.execSync(`cd iTrust-v23 && git rev-parse fuzzer`).toString().trim();
        //var jenkins_cmd = `curl "http://${jenkins_server}:8080/job/iTrust_Fuzz/build"`;
        var jenkins_cmd = `curl "http://${jenkins_server}:8080/git/notifyCommit?url=https://github.ncsu.edu/cfernan3/iTrust-v23.git&branches=fuzzer&sha1=${new_sha1}"`;
	console.log(jenkins_cmd);
	try {
            cp.execSync(jenkins_cmd);
            console.log("Succesfully trigger build for fuzzer");
        } catch (error) {
            console.log("Couldn't trigger build for fuzzer");
        }
    }
}

runFuzzer(100); //change this count to trigger apporpriate number of commits
