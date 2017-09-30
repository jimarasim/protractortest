var GoogleLoginPage = function(){ 
  //PRIVATE
  var googleEmail = element(by.css('input[type=email]'));
  var googlePassword = element(by.css('input[type=password]'));
  var nextButton = element(by.xpath('//span[contains(text(),"Next")]'));

  //PUBLIC
  this.login = function(){
      var until = protractor.ExpectedConditions;
      
      browser.wait(until.presenceOf(googleEmail), 5000, 'Email Element taking too long to appear in the DOM');
      googleEmail.sendKeys('jaemzware@gmail.com');
      
      nextButton.click();
      
      browser.wait(until.elementToBeClickable(googlePassword), 5000, 'Password Element taking too long to appear in the DOM');      
      googlePassword.sendKeys('g00g732112');
      
      nextButton.click();

  };
  
};

module.exports = GoogleLoginPage;


