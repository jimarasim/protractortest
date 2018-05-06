/* global by, browser, element, protractor */
var ExpediaPackageHotelBookPage = require('./ExpediaPackageHotelBookPage');
var ExpediaPackageFlightSelectPage = require('./ExpediaPackageFlightSelectPage');
var ExpediaPackageSummaryPage = require('./ExpediaPackageSummaryPage');
var ExpediaPackageReviewPage = require('./ExpediaPackageReviewPage');

module.exports = class ExpediaPackageHotelSelectPage {
    get hotelInstructionText() { return element(by.id('hotelResultTitle')); }
    get hotelLinks() { return element.all(by.css('a.flex-link')); }

    waitForPage() {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.hotelInstructionText), 30000, 'Element hotelInstructionText taking too long to appear in the DOM');  
    }
    
    getHotelLinks() {
        return this.hotelLinks;
    }
    
    finishThroughReviewWithRandomHotelLink() {
        var self = this; //can't use this inside then, but for some odd reason self works as a re-defined this
        this.hotelLinks.count().then(function(count){
            let randomHotelLinkIndex = Math.floor(Math.random() * count);
            self.hotelLinks.get(randomHotelLinkIndex).click();
            
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[1]).then(function(){
                    var expediaPackageHotelBookPage = new ExpediaPackageHotelBookPage();
                    
                    var until = protractor.ExpectedConditions;
                    browser.wait(until.presenceOf(expediaPackageHotelBookPage.bookButton), 30000, 'Element ExpediaPackageHotelBookPage.bookButton taking too long to appear in the DOM');
                    expediaPackageHotelBookPage.bookButton.click();
                    
                    var expediaPackageFlightSelectPage = new ExpediaPackageFlightSelectPage();
                    browser.wait(until.presenceOf(expediaPackageFlightSelectPage.selectButton), 30000, 'Element expediaPackageFlightSelectPage.selectButton taking too long to appear in the DOM for departure');
                    expediaPackageFlightSelectPage.selectButton.click();
                    
                    browser.wait(until.presenceOf(expediaPackageFlightSelectPage.selectButton), 30000, 'Element expediaPackageFlightSelectPage.selectButton taking too long to appear in the DOM for return');
                    expediaPackageFlightSelectPage.selectButton.click();
                    
                    var expediaPackageSummaryPage = new ExpediaPackageSummaryPage();
                    browser.wait(until.presenceOf(expediaPackageSummaryPage.continueBookingButton), 30000, 'Element expediaPackageSummaryPage.continueBookingButton taking too long to appear in the DOM');
                    expediaPackageSummaryPage.continueBookingButton.click();
                    
                    var expediaPackageReviewPage = new ExpediaPackageReviewPage();
                    expect(expediaPackageReviewPage.completeBookingButton.isDisplayed()).toBeTruthy();
                    expect(expediaPackageReviewPage.firstName.isDisplayed()).toBeTruthy();
                    expect(expediaPackageReviewPage.lastName.isDisplayed()).toBeTruthy();
                });
            });
            
        });
    }
    
};


