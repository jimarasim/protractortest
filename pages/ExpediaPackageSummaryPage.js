/* global by, protractor, browser */
var ExpediaPackageReviewPage = require('../pages/ExpediaPackageReviewPage');

module.exports = class ExpediaPackageSummaryPage {
    get continueBookingButton() { return element(by.id('FlightUDPBookNowButton1')); }
    
    waitForPage() {
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.continueBookingButton), 60000, 'Element continueBookingButton taking too long to appear in the DOM for departure');
    }
    
    clickContinueBookingButton() {
        this.waitForPage();
        this.continueBookingButton.click();
        
        return new ExpediaPackageReviewPage; 
    }
};


