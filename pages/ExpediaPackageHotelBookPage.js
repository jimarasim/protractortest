/* global by, protractor, browser, until */

var ExpediaPackageFlightSelectPage = require('../pages/ExpediaPackageFlightSelectPage');


module.exports = class ExpediaPackageHotelBookPage {
    get bookButton() { return element(by.css('a.book-button')); }
    get mapLink() { return element(by.css('a.map-link')); }
    
    
    waitForPage() {
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.bookButton), 60000, 'Element mapLink taking too long to appear in the DOM for departure');
    }
    
    clickBookButton() {
        this.waitForPage();
        let until = protractor.ExpectedConditions;
        this.bookButton.click();
        
        let expediaPackageFlightSelectPage = new ExpediaPackageFlightSelectPage();
        browser.wait(until.presenceOf(expediaPackageFlightSelectPage.selectButton), 60000, 'Element expediaPackageFlightSelectPage.selectButton taking too long to appear in the DOM for departure');

        return expediaPackageFlightSelectPage;
    }
};


