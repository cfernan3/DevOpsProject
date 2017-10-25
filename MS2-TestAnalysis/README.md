# DevOpsProject

## Team
* Calvin Fernando (cfernan3)
* Davis Pynadath (dppynada)
* Jeris Alan Jawahar (jjawaha)
* Revanth Pathuri (rpathur)


Milestone1: https://github.ncsu.edu/rpathur/DevOpsProject/tree/master/MS1-ConfigurationManagement

Milestone2: https://github.ncsu.edu/rpathur/DevOpsProject/tree/Milestone2/MS2-TestAnalysis




## 1. Testing Component

Extend the build definitions for iTrust to include the ability to run its test suite, measure coverage, and report the results.
#### setup 

1) edit the inventory file in the checkbox.io folder and change the public IP of EC2 instance and the keypair to login to the    instance
2) run the setupiTrustbuild.yml 

This yml file would install the jenkins server and setup the build job for iTrust application. Additionally as a build command it would run mvn package which would run the tests of the iTrust. 
In the end if we go back to the url of the jenkins job (http://IP:8080/job/iTrust_job/) which would give the code coverage report for the iTrust application.

#### sample screenshot for code coverage

<img width="1231" alt="screen shot 2017-10-24 at 5 43 25 pm" src="https://media.github.ncsu.edu/user/6181/files/ebc507a4-b8e2-11e7-8de2-0291143425d6">


#### Code Coverage Screencast
The screencast for the Testing component is below.

https://youtu.be/_eT9clq10Yk

## 2. Commit Fuzzer

### setup

1) edit the inventory file in the iTrust/Fuzzer/ folder and change the public IP of EC2 instance and the keypair to login to the    instance
2) run the fuzzing.yml

This yml file is the playbook that triggers the commit fuzzer.It would create a new job, i_fuzzing, on jenkins server and execute npm install and node fuzzing.js. Additionally, the post build job has been configured to publish the using junit Testing Result report. The fuzzing.js scans the iTrust dir for all the .java files and randomly changes the code as per the given constraint.

#### Screencast for commit Fuzzer

https://youtu.be/9Gh4g9CVHBU

## 3. Useless Test Generator

### setup


##  4. Analysis Component

#### setup

1) edit the inventory file in the checkbox.io folder and change the public IP of EC2 instance and the keypair to login to the    instance
2) run the setupCheckboxIobuild.yml 

This yml file would install the jenkins server and setup the build job for checkbox.io application. Additionally as a build command it would run analysis.js code as well to check if the checkbox.io application follows the specified constraints.

The report for the analysis is there in markdown file in the checkbox.io folder https://github.ncsu.edu/rpathur/DevOpsProject/blob/Milestone2/MS2-TestAnalysis/checkbox.io/markdown

#### Analysis Component Screencast

https://youtu.be/Yeu0xwAzbh0
