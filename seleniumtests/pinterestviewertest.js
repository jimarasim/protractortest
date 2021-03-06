var PinterestLoginPage = require('../pages/pinterestloginpage.js');
var pinterestLoginPage = new PinterestLoginPage();
var PinterestHomePage = require('../pages/pinteresthomepage.js');
var pinterestHomePage = new PinterestHomePage();
var PinterestViewerPage = require('../pages/pinterestviewerpage.js');
var pinterestViewerPage = new PinterestViewerPage();

describe('Pinterest Viewer Page', function() {
beforeEach(function() {
    browser.waitForAngularEnabled(false); //browser.ignoreSynchronisation = true;
    browser.driver.manage().window().maximize();
    pinterestHomePage.get();
    pinterestLoginPage.loginIfNot();
});
 
it('Clicking a pin result should take you to the pin result viewer, where you can click a next button for a slideshow of at least 10 slides.', function() {
    pinterestHomePage.clickAResult();
    for(var i=0;i<5;i++){
        pinterestViewerPage.clickNextSlide();
        expect(pinterestViewerPage.sendCount()).toEqual(1);
        expect(pinterestViewerPage.moreOptionsPresence()).toBeTruthy();
    }
});
  
it('Clicking the eleventh pin result should take you to a pin result viewer, where you can click a previous button for a slidshow of the 10 previous slides.', function() {
    pinterestHomePage.clickFifthResult();
    for(var i=0;i<3;i++){
        pinterestViewerPage.clickPreviousSlide();
        expect(pinterestViewerPage.sendCount()).toEqual(1);
        expect(pinterestViewerPage.moreOptionsPresence()).toBeTruthy();
    }
});  

it('Clicking a random slide should allow saving to the Test category, and a saved message should appear.', function() {
    pinterestHomePage.clickRandomResult();
    pinterestViewerPage.clickSaveAndSaveToTest();
});
});


