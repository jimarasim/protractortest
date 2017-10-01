var PinterestViewerPage = function(){ 
  //PRIVATE
  var nextSlide = element(by.css('button[aria-label="Next Pin"]'));
  var previousSlide = element(by.css('button[aria-label="Previous Pin"]'));
  var send = element.all(by.xpath('//div[contains(text(),"Send")]'));
  var moreOptions = element.all(by.css('button[aria-label="More options"]'));
  
  var urlChanged = function(url) {
  return function () {
    return browser.getCurrentUrl().then(function(actualUrl) {
      return url != actualUrl;
    });
  };
  };
  
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
  
  this.sendCount = function(){
      return send.count();
  };
  
  this.moreOptionsPresence = function(){
      return moreOptions.isPresent();
  };
  
};
  
module.exports = PinterestViewerPage;



