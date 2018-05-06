/* global by, browser, element */

module.exports = class ExpediaHomePage {
    
    get headerLogo() { return element(by.id('header-logo')); }
    get packageOriginInput() { return element(by.id('package-origin-hp-package')); }
    get packageDestinationInput() { return element(by.id('package-destination-hp-package')); }
    get packageDepartingInput() { return element(by.id('package-departing-hp-package')); }
    get packageReturningInput() { return element(by.id('package-returning-hp-package')); }
    get packageSearchButton() { return element(by.id('search-button-hp-package')); }
    get legalText() { return element(by.css('div.legal')); }
    
    navigate() {
        browser.get('https://www.expedia.com');
    }
    
    clickHeaderLogo() {
        this.headerLogo.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.packageOriginInput), 5000, 'Element originInput taking too long to appear in the DOM');       
    }
    
    submitOriginAndDestinationForToday(cityCodeOrigin, cityCodeDestination) {
        this.packageOriginInput.sendKeys(cityCodeOrigin);
        this.packageDestinationInput.sendKeys(cityCodeDestination);
        
        let travelDate = this.getCurrentDateInMMDDYYYY();
        this.packageDepartingInput.sendKeys(travelDate);
        this.packageReturningInput.sendKeys(travelDate);
        
        this.packageSearchButton.click();
    }
    
    getLegalText() {
        return this.legalText.getText();
    }
    
    getCurrentDateInMMDDYYYY() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd;
        } 

        if(mm<10) {
            mm = '0'+mm;
        } 

        return mm + '/' + dd + '/' + yyyy;
    }
    
};






