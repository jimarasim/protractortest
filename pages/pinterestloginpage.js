var GoogleLoginPage = require('./googleloginpage.js');

var PinterestLoginPage = function(){ 
  //PRIVATE
  var pGoogleConnectButton = element(by.css('button.GoogleConnectButton.active'));
  var loginButton = element(by.xpath('//button[contains(text(),"Log in")]'));
  var pSearch = element(by.css('input[name=q]'));

  //PUBLIC
  this.get = function(){
      browser.get('https://www.pinterest.com/');
  };
  
  clickGoogleConnectButtonAndSwitchToPopup = function(){
      pGoogleConnectButton.click();
      browser.wait(windowCount(2), 20000);
      
      browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]);
      });
  };
  
  waitForLoginAfterGoogle = function(){
      browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[0]);
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(pSearch), 20000, 'PSearch Element taking too long to appear in the DOM');      

      });
  };
  
  this.loginIfNot = function(){
        var googleLoginPage = new GoogleLoginPage();
        browser.isElementPresent(loginButton).then(function(result){
        if(result===true){
            clickGoogleConnectButtonAndSwitchToPopup();
            googleLoginPage.login();
            waitForLoginAfterGoogle();
        }
      });
  }

};

function windowCount (count) {
    return function () {
        return browser.getAllWindowHandles().then(function (handles) {
            return handles.length === count;
        });
    };
}; 
  
module.exports = PinterestLoginPage;






