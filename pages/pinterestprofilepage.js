var PinterestProfilePage = function(){
    //PRIVATE
    var settingsButton = element(by.css('button[aria-label="Edit settings"]'));
    var sendProfileButton = element(by.css('button[aria-label="Send Profile"]'));
    var userMenuButton = element(by.css('button[aria-label="User menu"]'));
    var profilePicture = element(by.css('div.BrioProfileHeaderWrapper img'));
    var boardsDiv = element(by.xpath('//div[contains(text(),"Boards")]'));
    var pinsDiv = element(by.xpath('//div[contains(text(),"Pins")]'));
    var triedDiv = element(by.xpath('//div[contains(text(),"Tried")]'));
    
    this.settingsButtonPresence = function(){
        return settingsButton.isPresent();
    };
    
    this.sendProfileButtonPresence = function(){
        return sendProfileButton.isPresent();
    };
    
    this.userMenuButtonPresence = function(){
        return userMenuButton.isPresent();
    };
    
    this.profilePicturePresence = function(){
        return profilePicture.isPresent();
    };
    
    this.boardsDivPresence = function(){
        return boardsDiv.isPresent();
    };
    
    this.pinsDivPresence = function(){
        return pinsDiv.isPresent();
    };
    
    this.triedDivPresence = function(){
        return triedDiv.isPresent();
    };
    
    this.clickSettingsButton = function(){
        settingsButton.click();
        
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(element(by.id('accountBasicsEmail'))), 20000, 'Email Textbox taking too long to appear in the DOM');  
    }
};

module.exports = PinterestProfilePage;



