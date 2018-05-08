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
    get packageEmptyFieldAlert() { return element(by.css('#gcw-packages-form-hp-package div.validation-alert')); }
    
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
        
        let travelDate = utilities.getCurrentDateInMMDDYYYY(1);
        this.packageDepartingInput.clear(); //need to clear these because the site will remember them, and append if not
        this.packageReturningInput.clear();
        this.packageDepartingInput.sendKeys(travelDate);
        this.packageReturningInput.sendKeys(travelDate);
        
        this.packageSearchButton.click();

        return new ExpediaPackageHotelSelectPage;
    }  
    
    submitOrginAndDestinationEmpty() {
        this.packageDepartingInput.clear();
        this.packageReturningInput.clear();
        
        this.packageSearchButton.click();
    }
    
    verifyHeaderLinks() {
        let headerLinks = {
            'Bundle and Save' : 'https://www.expedia.com/Vacation-Packages',
            'Hotels' : 'https://www.expedia.com/Hotels',
            'Cars' : 'https://www.expedia.com/Cars',
            'Flights' : 'https://www.expedia.com/Flights',
            'Cruises' : 'https://www.expedia.com/Cruises',
            'Things to Do' : 'https://www.expedia.com/Activities',
            'Discover' : 'https://www.expedia.com/search-results?rfrr=headermenu',
            'Vacation Rentals' : 'https://www.expedia.com/vacation-rentals/',
            'Deals' : 'https://www.expedia.com/Deals',
            'Rewards' : 'https://www.expedia.com/rewards/howitworks',
            'Mobile' : 'https://www.expedia.com/app',
            'Collections' : 'https://www.expedia.com/collections'
        }
        for(let link in headerLinks) {
            element(by.linkText(link)).click();
            browser.getCurrentUrl().then((result)=>{
                expect(result).toEqual(headerLinks[link]);
            });
        }
    }
};






