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

 it('Clicking the Pinterest Icon should yield more than 10 pin results.', function() {
    pinterestHomePage.pressPButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
 });
 
 it('Clicking the Explore button should yield more than 10 pin results and 5 articles.', function() {
    pinterestHomePage.pressExploreButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
    expect(pinterestHomePage.getArticlesCount()).toBeGreaterThan(5);
 });
 
  it('Clicking the Home button should yield more than 10 pin results.', function() {
    pinterestHomePage.pressHomeButton();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
 });
 
 it('Searching for honda should yield Improvements and more than 10 pin results, and clicking the second Improvement should yield more than 10 pin results.', function(){
    pinterestHomePage.searchForItem('honda');
    expect(pinterestHomePage.searchImprovementsPresence()).toBeTruthy();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
     
    pinterestHomePage.clickSecondImprovement();
    expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
 });
});