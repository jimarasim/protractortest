/* global browser, until, expect, protractor */
var ExpediaHomePage = require('../pages/ExpediaHomePage');
var ExpediaPackageHotelSelectPage = require('../pages/ExpediaPackageHotelSelectPage.js');
var ExpediaPackageHotelBookPage = require('../pages/ExpediaPackageHotelBookPage');
var ExpediaPackageFlightSelectPage = require('../pages/ExpediaPackageFlightSelectPage');
var ExpediaPackageSummaryPage = require('../pages/ExpediaPackageSummaryPage');
var ExpediaPackageReviewPage = require('../pages/ExpediaPackageReviewPage');

var expediaHomePage = new ExpediaHomePage();

xdescribe('Package reservation', function(){
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 105000;
        browser.waitForAngularEnabled(false); 
        expediaHomePage.navigate();
    });
    it('should flow a random happy path through booking', function(){
        let expediaPackageHotelSelectPage = expediaHomePage.submitOriginAndDestinationForToday('SEA','BOI');
        
        expediaPackageHotelSelectPage.clickRandomHotel(); //note: can't return page from this method because it's marked async, but it ends up on ExpediaPackageHotelBookPage
        
        let expediaPackageHotelBookPage = new ExpediaPackageHotelBookPage();        
        let expediaPackageFlightSelectPage = expediaPackageHotelBookPage.clickBookButton();
        expediaPackageFlightSelectPage = expediaPackageFlightSelectPage.clickDepartureSelectButton();
        let expediaPackageSummaryPage = expediaPackageFlightSelectPage.clickReturnSelectButton();
        let expediaPackageReviewPage = expediaPackageSummaryPage.clickContinueBookingButton();

        expect(expediaPackageReviewPage.completeBookingButton.isDisplayed()).toBeTruthy();
        expect(expediaPackageReviewPage.firstName.isDisplayed()).toBeTruthy();
        expect(expediaPackageReviewPage.lastName.isDisplayed()).toBeTruthy();
    });
});


