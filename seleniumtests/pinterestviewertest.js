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
 
it('should be able to cycle through viewer to the right', function() {

   pinterestHomePage.clickAResult();
   for(var i=0;i<10;i++){
        pinterestViewerPage.clickNextSlide();
        expect(pinterestViewerPage.sendCount()).toEqual(1);
   }
   
 });
 
  
it('should be able to cycle through viewer to the left', function() {

   pinterestHomePage.clickEleventhResult();
   for(var i=0;i<10;i++){
        pinterestViewerPage.clickPreviousSlide();
        expect(pinterestViewerPage.sendCount()).toEqual(1);
   }
   
 });
 
});


