function onFormSubmit(e) {
  var response = e.values;
  var score = 0
  var compute=0,network=0,storage=0,arch=0,security=0;
  var result;
  var points = [10,10,7,6,7,7,6,7,5,5,5,5,10,10]
  var answers = ['No','No','No','No','No','Yes','No','No','N-tier / distributed','Yes','No','No','No','No'];
  
  var name = e.values[16]
  Logger.log(response);
  
  for( var i =0; i < 14; i++)
  { 
    if(i<2) 
    {
          if(e.values[i+1] == answers[i]) compute = compute + points[i];        
    }
    if(i>1 && i <5) 
    {
          if(e.values[i+1] == answers[i]) network = network + points[i];        
    }
    if(i>4 && i <8) 
    {
          if(e.values[i+1] == answers[i]) storage = storage + points[i];        
    }
    if(i>7 && i <12) 
    {
          if(e.values[i+1] == answers[i]) arch = arch + points[i];        
    }
    if(i>11) 
    {
          if(e.values[i+1] == answers[i]) security = security + points[i];        
    }
  }
  
  score = compute+network+storage+arch+security;
  if(score >= 95){
    result = " Cloud ready app"
   }
  else if (score > 50 && score < 95)
  { result = " Few factors inhibit the move to cloud "  
  }
  else{
    result = " This is not a cloud ready application " 
  }
  Logger.log(score);
  Logger.log(compute);
  Logger.log(network);
  Logger.log(storage);
  Logger.log(arch);
  Logger.log(security);
  emailUser(name,result,compute,network,storage,arch,security,e.values[17])
}

