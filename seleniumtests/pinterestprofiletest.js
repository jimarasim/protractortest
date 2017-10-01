var PinterestLoginPage = require('../pages/pinterestloginpage.js');
var pinterestLoginPage = new PinterestLoginPage();
var PinterestHomePage = require('../pages/pinteresthomepage.js');
var pinterestHomePage = new PinterestHomePage();
var PinterestProfilePage = require('../pages/pinterestprofilepage.js');
var pinterestProfilePage = new PinterestProfilePage();

describe('Pinterest Profile Page', function() {
beforeEach(function() {
    browser.waitForAngularEnabled(false); 
    browser.driver.manage().window().maximize();
    pinterestHomePage.get();
    pinterestLoginPage.loginIfNot();
 });

it('Pinterest profile page should have several expected elements on it: profile buttons, profile picture, etc', function() {
    pinterestHomePage.pressProfileButton();
    expect(pinterestProfilePage.settingsButtonPresence()).toBeTruthy();    
    expect(pinterestProfilePage.sendProfileButtonPresence()).toBeTruthy();    
    expect(pinterestProfilePage.userMenuButtonPresence()).toBeTruthy();    
    expect(pinterestProfilePage.profilePicturePresence()).toBeTruthy();
    expect(pinterestProfilePage.boardsDivPresence()).toBeTruthy();
    expect(pinterestProfilePage.pinsDivPresence()).toBeTruthy();
    expect(pinterestProfilePage.triedDivPresence()).toBeTruthy();

 });
 });
