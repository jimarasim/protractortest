/* global by, browser, element, protractor */
var ExpediaPackageHotelBookPage = require('./ExpediaPackageHotelBookPage');

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

    async getHotelLinkCount() {
        return this.hotelLinks.count();
    }
    
    async getWindowHandles() {
        return browser.getAllWindowHandles();
    }
    
    async switchToHotelBookPage(handles) {
        return browser.switchTo().window(handles[1]);
    }

    async clickRandomHotel() {
        this.waitForPage();
        let hotelCount = await this.getHotelLinkCount();

        let randomHotelLinkIndex = Math.floor(Math.random() * hotelCount);
        this.hotelLinks.get(randomHotelLinkIndex).click();

        let handles = await this.getWindowHandles();
        await this.switchToHotelBookPage(handles);
        
        return new ExpediaPackageHotelBookPage();
     
    }
    
};


