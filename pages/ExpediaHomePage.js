/* global by, browser, element */
var ExpediaPackageHotelSelectPage = require('../pages/ExpediaPackageHotelSelectPage.js');
var utilities = require('../utilities/utilities');

module.exports = class ExpediaHomePage {
    
    get headerLogo() { return element(by.id('header-logo')); }
    get packageOriginInput() { return element(by.id('package-origin-hp-package')); }
    get packageDestinationInput() { return element(by.id('package-destination-hp-package')); }
    get packageDepartingInput() { return element(by.id('package-departing-hp-package')); }
    get packageReturningInput() { return element(by.id('package-returning-hp-package')); }
    get packageSearchButton() { return element(by.id('search-button-hp-package')); }
    get legalText() { return element(by.css('div.legal')); }
    
    clickHeaderLogo() {
        this.headerLogo.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.packageOriginInput), 5000, 'Element originInput taking too long to appear in the DOM');       
    }
    
    getLegalText() {
        return this.legalText.getText();
    }  
    
    navigate() {
        browser.get('https://www.expedia.com');
    }
    
    submitOriginAndDestinationForToday(cityCodeOrigin, cityCodeDestination) {
        this.packageOriginInput.sendKeys(cityCodeOrigin);
        this.packageDestinationInput.sendKeys(cityCodeDestination);
        
        let travelDate = utilities.getCurrentDateInMMDDYYYY();
        this.packageDepartingInput.clear(); //need to clear these because the site will remember them, and append if not
        this.packageReturningInput.clear();
        this.packageDepartingInput.sendKeys(travelDate);
        this.packageReturningInput.sendKeys(travelDate);
        
        this.packageSearchButton.click();
        
        var expediaPackageHotelSelectPage = new ExpediaPackageHotelSelectPage();
        expediaPackageHotelSelectPage.waitForPage();
        return expediaPackageHotelSelectPage;
        
    }  
};






