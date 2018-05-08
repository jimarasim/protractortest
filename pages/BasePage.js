/* global browser */

module.exports = class BasePage {
    async getCurrentUrl() {
        return browser.getCurrentUrl();
    }
};

