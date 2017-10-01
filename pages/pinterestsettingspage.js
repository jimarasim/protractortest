var PinterestSettingsPage = function(){
    var accountBasicsOption = element(by.xpath('//div[contains(text(),"Account Basics")]'));
    var profileOption = element(by.xpath('//div[contains(text(),"Profile")]'));
    var notificationsOption = element(by.xpath('//div[contains(text(),"Notifications")]'));
    var homeFeedOption = element(by.xpath('//div[contains(text(),"Home feed")]'));
    var socialNetworksOption = element(by.xpath('//div[contains(text(),"Social Networks")]'));
    var securityOption = element(by.xpath('//div[contains(text(),"Security")]'));
    var appsOption = element(by.xpath('//div[contains(text(),"Apps")]'));
    
    var emailTextbox = element(by.id('accountBasicsEmail'));
    var firstNameTextbox = element(by.id('userFirstName'));
    var pinterestEditButton = element(by.xpath('//div[contains(text(),"Edit")][1]'));
    var pickedForYouCheckbox = element(by.id('pfy_preference'));
    var pickedForYouLearnMoreLink = element(by.css('a[href*="picked-for-you-pins"]'));
    var loginWithFacebookCheckbox = element(by.id('login_with_facebook'));
    var socialNetworksLearnMoreLink = element(by.css('a[href*="share-pins-facebook-or-twitter"]'));
    var showSessionsButton = element(by.xpath('//div[contains(text(),"Show sessions")]'));
    
    var saveSettingsButton = element(by.xpath('//div[contains(text(),"Save settings")]'));

    
    this.get = function(){
        browser.get('https://www.pinterest.com/settings');
    };
    
    this.clickAccountBasicsOption = function(){
        accountBasicsOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(emailTextbox), 5000, 'Email Textbox taking too long to appear in the DOM');  
    }
    
    this.clickProfileOption = function(){
        profileOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(firstNameTextbox), 5000, 'First Name Textbox taking too long to appear in the DOM');  
    }
    
    this.clickNotificationsOption = function(){
        notificationsOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(pinterestEditButton), 5000, 'Pinterest Edit Button taking too long to appear in the DOM'); 
    }
    
    this.clickHomeFeedOption = function(){
        homeFeedOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(pickedForYouLearnMoreLink), 5000, 'Picked for you checkbox taking too long to appear in the DOM'); 
    }
    
    this.clickSocialNetworksOption = function(){
        socialNetworksOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(socialNetworksLearnMoreLink), 5000, 'Login with facebook checkbox taking too long to appear in the DOM'); 
    }
    
    this.clickSecurityOption = function(){
        securityOption.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(showSessionsButton), 5000, 'Show sessions button taking too long to appear in the DOM'); 
    }
    
    this.clickAppsOption = function(){
        appsOption.click();
    }
    
    this.saveSettingsButtonPresence = function(){
        return saveSettingsButton.isPresent();
    }
    
};

module.exports = PinterestSettingsPage;


