var PinterestHomePage = function(){ 
  //PRIVATE
  var pButton = element(by.css('svg._mh'));
  var exploreButton = element(by.xpath('//div[contains(text(),"Explore")]'));
  var homeButton = element(by.xpath('//div[contains(text(),"Home")]'));
  var profileButton = element(by.css('div[aria-label=Saved]'));
  var aResult = element(by.css('div[data-grid-item=true]'));
  var fifthResult = element(by.css('div[data-grid-item=true]:nth-child(5)'));
  var resultsList = element.all(by.css('div[data-grid-item=true]'));
  var articleList = element.all(by.css('div._0._25._2p._2c._2i._3h._56._jz._s._3o > div.article'));
  var searchTextbox = element(by.css('input[name=q]'));
  var searchImprovementsWrapper = element(by.css('div.improvementsWrapper'));
  var secondSearchImprovement = element(by.css('div.improvementsWrapper > div > div:nth-child(1) > div > div > div:nth-child(2) > a'));
  var addPinButton = element(by.css('button[aria-label="Add Pin"]'));
  var moreButton = element(by.css('button[aria-label="More"]'));
  var privacyLink = element(by.xpath('//a[contains(text(),"Privacy")]'));


  //PUBLIC
  this.get = function(){
      browser.get('https://www.pinterest.com/');
  };
  
  this.clickPButton = function(){
      pButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 20000, 'Result Element taking too long to appear in the DOM');  
  };
  
  this.clickExploreButton = function(){
      exploreButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 20000, 'Result Element taking too long to appear in the DOM');  
  };
  
  this.clickHomeButton = function(){
      homeButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 20000, 'Result Element taking too long to appear in the DOM');   
  };
  
  this.clickProfileButton = function(){
      profileButton.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(element(by.xpath('//div[contains(text(),"Boards")]'))), 20000, 'Boards button taking too long to appear in the DOM');   
  };
  
  this.searchForItem = function(searchString){
      searchTextbox.click();
      searchTextbox.sendKeys(searchString);
      searchTextbox.sendKeys(protractor.Key.ENTER);
  
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 20000, 'Result Element taking too long to appear in the DOM after search entered');  
  }
  
  this.clickAResult = function(){
      aResult.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(element(by.xpath('//div[contains(text(),"Send")]'))), 20000, 'Viewer send button taking too long to appear');
  };
  
  this.clickFifthResult = function(){
      fifthResult.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(element(by.xpath('//div[contains(text(),"Send")]'))), 20000, 'Viewer send button taking too long to appear');
  };
  
  this.clickRandomResult = function(){
    resultsList.count().then(function(resultCount){
        var randomResultNumber = Math.floor((Math.random() * resultCount) + 1);
        resultsList.get(randomResultNumber).click();

        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(element(by.xpath('//div[contains(text(),"Send")]'))), 20000, 'Viewer send button taking too long to appear');
    });
  };
  
  this.clickSecondImprovement = function(){
      secondSearchImprovement.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.elementToBeClickable(aResult), 20000, 'Result Element taking too long to appear in the DOM'); 
  };
  
  this.getResultsCount = function(){
      return resultsList.count();
  };
  
  this.getArticlesCount = function(){
      return articleList.count();
  };
  
  this.searchImprovementsPresence = function(){
      return searchImprovementsWrapper.isPresent();
  };
  
  this.addPinButtonPresence = function(){
      return addPinButton.isPresent();
  };
  
  this.moreButtonPresence = function(){
      return moreButton.isPresent();
  };
  
  this.privacyLinkPresence = function(){
      return privacyLink.isPresent();
  };
  
};
  
module.exports = PinterestHomePage;



