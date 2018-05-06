var ExpediaHomePage = require('../pages/ExpediaHomePage');
var ExpediaPackageHotelSelectPage = require('../pages/ExpediaPackageHotelSelectPage.js');

var expediaHomePage = new ExpediaHomePage();

describe('Package reservation', function(){
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 105000;
        browser.waitForAngularEnabled(false); 
        expediaHomePage.navigate();
    });
    it('should flow a random happy path through booking', function(){
        let expediaPackageHotelSelectPage = expediaHomePage.submitOriginAndDestinationForToday('SEA','BOI');
        expediaPackageHotelSelectPage.finishThroughReviewWithRandomHotelLink();
    });
});


