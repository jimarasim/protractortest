/* global by, browser, element */

module.exports = class ExpediaHomePage {
    
    get headerLogo() { return element(by.id('header-logo')); }
    
    navigate() {
        browser.get('https://www.expedia.com');
    }
    
    clickHeaderLogo() {
        this.headerLogo.click();
    }
}






