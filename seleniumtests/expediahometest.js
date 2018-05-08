/* global expect, browser */

var ExpediaHomePage = require('../pages/ExpediaHomePage.js');
var ExpediaPackageHotelSelectPage = require('../pages/ExpediaPackageHotelSelectPage.js');

var expediaHomePage = new ExpediaHomePage();

xdescribe('Expedia Home Page', function() {
beforeEach(function() {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
   browser.waitForAngularEnabled(false); 
   expediaHomePage.navigate();
 });

it('Should load the home page when you click the header logo', function() {
    expediaHomePage.clickHeaderLogo();
    
    expect(expediaHomePage.getLegalText()).toContain('not responsible for');
 });
 
it('Should be able to submit package reservation form', function(){
    var expediaPackageHotelSelectPage = expediaHomePage.submitOriginAndDestinationForToday('SEA','BOI');
    
    expediaPackageHotelSelectPage.waitForPage();
    
    expect(expediaPackageHotelSelectPage.getHotelLinks().count()).toBeGreaterThan(10);
 });
 
 it('Should bring up the correct page for all links in the header', function() {
    expediaHomePage.verifyHeaderLinks();
 });
 
 it('Should show required fields error message when you submit reservation form without info', function() {
    expediaHomePage.submitOrginAndDestinationEmpty(); 
    
    expect(expediaHomePage.packageEmptyFieldAlert.isDisplayed()).toBeTruthy();
    expect(expediaHomePage.packageEmptyOriginMessage.getText()).toEqual('Please complete the highlighted origin field below.');
    expect(expediaHomePage.packageEmptyDestinationMessage.getText()).toEqual('Please complete the highlighted destination field below.');

 });
 
});


