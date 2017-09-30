var CraigslistHomePage = require('../pages/craigslisthomepage.js');
var CraigslistResultsPage = require('../pages/craigslistresultspage.js');

var craigslistHomePage = new CraigslistHomePage();

describe('Craigslist Home Page', function() {
beforeEach(function() {
   browser.waitForAngularEnabled(false); 
   craigslistHomePage.get();
 });

it('it should search and find more than 10 results', function() {
   craigslistHomePage.searchWithString("honda");
   
   var craigslistResultsPage = new CraigslistResultsPage();
   craigslistResultsPage.waitFor();
   
   expect(craigslistResultsPage.getResultsCount()).toBeGreaterThan(10);
 });

it('it should have 7 area links', function() {
   expect(craigslistHomePage.getAreaLinkCount()).toEqual(7);
 });

it('spanish should have 200 categories', function() {
   craigslistHomePage.setLanguageToSpanish();
   var categoryCountSpanish = craigslistHomePage.getCategoryLinkCount();
   expect(categoryCountSpanish).toEqual(200);
 });
 
 it('each result should have a ...', function() {
   craigslistHomePage.searchWithString("pinto car");
   
   var craigslistResultsPage = new CraigslistResultsPage();
   craigslistResultsPage.waitFor();
   
   craigslistResultsPage.visitResults();
 });
 
});



