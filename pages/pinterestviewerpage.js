var PinterestViewerPage = function(){ 
  //PRIVATE
  var slide = element(by.css('button[aria-label="Next Pin"]'));
  var send = element.all(by.xpath('//div[contains(text(),"Send")]'));
  var mainImage = element(by.css('div.flashlightEnabled img'));
  
  var urlChanged = function(url) {
  return function () {
    return browser.getCurrentUrl().then(function(actualUrl) {
      return url != actualUrl;
    });
  };
  };
  
  this.clickNextSlide = function(){
        browser.getCurrentUrl().then(function(currentUrl){
            slide.click();
            browser.wait(urlChanged(currentUrl), 5000); 
        });
  };
  
  this.sendCount = function(){
      return send.count();
  };
  
  
  
};
  
module.exports = PinterestViewerPage;



