var ExpediaHomePage = require('../pages/ExpediaHomePage.js');

var expediaHomePage = new ExpediaHomePage();

describe('Expedia Home Page', function() {
beforeEach(function() {
   browser.waitForAngularEnabled(false); 
 });

it('should just load through direct navigation and clicking header logo', function() {
    expediaHomePage.navigate();
    expediaHomePage.clickHeaderLogo();
 });
 
});


