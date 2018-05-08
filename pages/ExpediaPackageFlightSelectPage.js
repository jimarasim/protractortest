/* global by */
var ExpediaPackageSummaryPage = require('../pages/ExpediaPackageSummaryPage');

module.exports = class ExpediaPackageFlightSelectPage {
    get selectButton() { return element(by.css('[data-test-id=select-button]')); }
    
    waitForPage() {
        let until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.selectButton), 60000, 'Element selectButton taking too long to appear in the DOM for departure');
    }
    
    clickDepartureSelectButton() {
        this.waitForPage();
        this.selectButton.click();
        
        return this;
    }
    
    clickReturnSelectButton() {
        this.waitForPage();
        this.selectButton.click();
        
        return new ExpediaPackageSummaryPage;
    }
};


