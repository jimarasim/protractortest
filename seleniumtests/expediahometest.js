var ExpediaHomePage = require('../pages/ExpediaHomePage.js');
var ExpediaPackageHotelSelectPage = require('../pages/ExpediaPackageHotelSelectPage.js');

var expediaHomePage = new ExpediaHomePage();
var expediaPackageHotelSelectPage = new ExpediaPackageHotelSelectPage();

describe('Expedia Home Page', function() {
beforeEach(function() {
   browser.waitForAngularEnabled(false); 
   expediaHomePage.navigate();
 });

it('Should load the home page when you click the header logo', function() {
    expediaHomePage.clickHeaderLogo();
    
    expect(expediaHomePage.getLegalText()).toContain('not responsible for');
 });
 
it('Should be able to submit package reservation form', function(){
    expediaHomePage.submitOriginAndDestinationForToday('SEA','BOI');
    expediaPackageHotelSelectPage.waitForPage();
    
    expect(expediaPackageHotelSelectPage.getHotelLinks().count()).toBeGreaterThan(10);
 });
 
});


