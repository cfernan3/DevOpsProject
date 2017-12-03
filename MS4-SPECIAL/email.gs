function emailUser(name,result,compute,network,storage,arch,security,email) {
  
  var template  = HtmlService.createTemplateFromFile("report.html");
  template.result = result;
  template.compute = compute.toString();
  template.network = network.toString();
  template.storage = storage.toString();
  template.arch = arch.toString();
  template.security = security.toString();
  template.name = name;
  MailApp.sendEmail(email, "Your cloud readiness report is here", "", 
                    {htmlBody: template.evaluate().getContent() })
}
