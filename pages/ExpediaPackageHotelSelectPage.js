/* global by, browser, element */

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
}


