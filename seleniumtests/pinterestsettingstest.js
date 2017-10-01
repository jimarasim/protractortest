var PinterestLoginPage = require('../pages/pinterestloginpage.js');
var pinterestLoginPage = new PinterestLoginPage();
var PinterestHomePage = require('../pages/pinteresthomepage.js');
var pinterestHomePage = new PinterestHomePage();
var PinterestProfilePage = require('../pages/pinterestprofilepage.js');
var pinterestProfilePage = new PinterestProfilePage();
var PinterestSettingsPage = require('../pages/pinterestsettingspage.js');
var pinterestSettingsPage = new PinterestSettingsPage();

describe('Pinterest Settings Page', function() {
beforeEach(function() {
    browser.waitForAngularEnabled(false); 
    browser.driver.manage().window().maximize();
    pinterestHomePage.get();
    pinterestLoginPage.loginIfNot();
 });

it('Pinterest settings page should have accessible Save button in each section.', function() {
    pinterestHomePage.clickProfileButton();
    pinterestProfilePage.clickSettingsButton();
    
    pinterestSettingsPage.clickProfileOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
    
    pinterestSettingsPage.clickNotificationsOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
    
    pinterestSettingsPage.clickHomeFeedOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
    
    pinterestSettingsPage.clickSocialNetworksOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
    
    pinterestSettingsPage.clickSecurityOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
    
    pinterestSettingsPage.clickAppsOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy(); 
    
    pinterestSettingsPage.clickAccountBasicsOption();
    expect(pinterestSettingsPage.saveSettingsButtonPresence()).toBeTruthy();  
 });
 });


