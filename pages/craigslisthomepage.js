var CraigslistHomePage = function(){ 
  //PRIVATE
  var searchField = element(by.id('query'));
  var areaLinks = element.all(by.css('#topban ul.sublinks li'));
  var categoryLinks = element.all(by.css('div.cats li'));
  var spanishOption = element(by.xpath("//option[contains(text(),'español')]"));
  var spanishText = element(by.xpath("//span[contains(text(),'comunidad')]"));
  
  //PUBLIC
  this.get = function(){
      browser.get('https://seattle.craigslist.org/');
  };
  
  this.searchWithString = function(string){
      searchField.sendKeys(string);
      searchField.sendKeys(protractor.Key.ENTER);
  };
  
  this.getAreaLinkCount = function(){
      return areaLinks.count();
  };
  
  this.setLanguageToSpanish = function(){
      spanishOption.click();
      
      var until = protractor.ExpectedConditions;
      browser.wait(until.presenceOf(spanishText), 5000, 'Element spanishText taking too long to appear in the DOM');
  };
  
  this.getCategoryLinkCount = function(){
      return categoryLinks.count();
  };
};

module.exports = CraigslistHomePage;


