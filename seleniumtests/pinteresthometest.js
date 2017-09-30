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
 
it('it should p search and find more than 10 results', function() {

   pinterestHomePage.pressPButton();
   
   expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
 });
 
 it('it should explore search and find more than 10 results and 5 articles', function() {

   pinterestHomePage.pressExploreButton();
   
   expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
   expect(pinterestHomePage.getArticlesCount()).toBeGreaterThan(5);
 });
 
  it('it should explore search and find more than 10 results', function() {

   pinterestHomePage.pressHomeButton();
   
   expect(pinterestHomePage.getResultsCount()).toBeGreaterThan(10);
 });
});