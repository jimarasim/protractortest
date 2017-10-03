var PinterestViewerPage = function(){ 
  //PRIVATE
  var nextSlide = element(by.css('button[aria-label="Next Pin"]'));
  var previousSlide = element(by.css('button[aria-label="Previous Pin"]'));
  var send = element.all(by.xpath('//div[contains(text(),"Send")]'));
  var moreOptions = element.all(by.css('button[aria-label="More options"]'));
  var save = element(by.css('div.SaveButton'));
  var testBoardSelection = element(by.xpath('//div[@role="button"]//p[contains(text(),"Test")]'));
  var savedToMessage = element(by.xpath('//div[contains(text(),"Saved to")]'));

  var urlChanged = function(url) {
  return function () {
    return browser.getCurrentUrl().then(function(actualUrl) {
      return url != actualUrl;
    });
  };
  };
  
  
  var savedToMessagePresence = function(){
      return function(){
          return savedToMessage.isPresent();
      }
  }
  
  
  this.clickNextSlide = function(){
        browser.getCurrentUrl().then(function(currentUrl){
            nextSlide.click();
            browser.wait(urlChanged(currentUrl), 20000); 
        });
  };
  
  this.clickPreviousSlide = function(){
        browser.getCurrentUrl().then(function(currentUrl){
            previousSlide.click();
            browser.wait(urlChanged(currentUrl), 20000); 
        });
  };
  
  this.clickSaveAndSaveToTest = function(){
      save.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(testBoardSelection), 20000, 'Test board selection entry taking too long to appear');
      
      testBoardSelection.click();
      browser.wait(savedToMessagePresence(), 20000, 'Test board selection entry taking too long to appear');
  }
  
  this.sendCount = function(){
      return send.count();
  };
  
  this.moreOptionsPresence = function(){
      return moreOptions.isPresent();
  };
  
};
  
module.exports = PinterestViewerPage;



