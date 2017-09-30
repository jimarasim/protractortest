var PinterestHomePage = function(){ 
  //PRIVATE
  var pButton = element(by.css('svg._mh'));
  var exploreButton = element(by.xpath('//div[contains(text(),"Explore")]'));
  var homeButton = element(by.xpath('//div[contains(text(),"Home")]'));
  var aResult = element(by.css('div[data-grid-item=true]'));
  var resultsList = element.all(by.css('div[data-grid-item=true]'));
  var articleList = element.all(by.css('div._0._25._2p._2c._2i._3h._56._jz._s._3o > div.article'));

  //PUBLIC
  this.get = function(){
      browser.get('https://www.pinterest.com/');
  };
  
  this.pressPButton = function(){
      pButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 10000, 'Result Element taking too long to appear in the DOM');  
  };
  
  this.pressExploreButton = function(){
      exploreButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 10000, 'Result Element taking too long to appear in the DOM');  
  };
  
  this.pressHomeButton = function(){
      homeButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 10000, 'Result Element taking too long to appear in the DOM');   
  };
  
  this.clickAResult = function(){
      aResult.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(element(by.xpath('//div[contains(text(),"Send")]'))), 10000, 'Viewer send button taking too long to appear');
  }
  
  this.getResultsCount = function(){
      return resultsList.count();
  };
  
  this.getArticlesCount = function(){
      return articleList.count();
  }
  
};
  
module.exports = PinterestHomePage;



