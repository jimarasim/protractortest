var PinterestLoginPage = require('../pages/pinterestloginpage.js');
var pinterestLoginPage = new PinterestLoginPage();
var PinterestHomePage = require('../pages/pinteresthomepage.js');
var pinterestHomePage = new PinterestHomePage();

describe('Pinterest Home Page', function() {
beforeEach(function() {
    browser.waitForAngularEnabled(false); 
    browser.driver.manage().window().maximize();
    pinterestHomePage.get();
    pinterestLoginPage.loginIfNot();
 });

 it('Clicking the Pinterest Icon should yield pin results.', function() {
    pinterestHomePage.clickPButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(4);
 });
 
 it('Clicking the Explore button should yield pin results and articles.', function() {
    pinterestHomePage.clickExploreButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(2);
    expect(pinterestHomePage.getArticlesCount()).toBeGreaterThan(2);
 });
 
  it('Clicking the Home button should yield pin results.', function() {
    pinterestHomePage.clickHomeButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(4);
 });
 
 it('Searching for honda should yield Improvements and pin results, and clicking the second Improvement should yield pin results.', function(){
    pinterestHomePage.searchForItem('honda');
    expect(pinterestHomePage.searchImprovementsPresence()).toBeTruthy();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(4);
     
    pinterestHomePage.clickSecondImprovement();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(4);
 });
 
 it('Scrolling down the page should keep Add Pin button, More button, and Privacy link available', function(){
    pinterestHomePage.clickHomeButton();
    expect(pinterestHomePage.addPinButtonPresence()).toBeTruthy();
    expect(pinterestHomePage.moreButtonPresence()).toBeTruthy();
    expect(pinterestHomePage.privacyLinkPresence()).toBeTruthy();
    
    browser.executeScript('window.scrollTo(0,5000);').then(function(){
        expect(pinterestHomePage.addPinButtonPresence()).toBeTruthy();
        expect(pinterestHomePage.moreButtonPresence()).toBeTruthy();
        expect(pinterestHomePage.privacyLinkPresence()).toBeTruthy();            
    });
 });
});