

/* global by */

module.exports = class ExpediaPackageHotelBookPage {
    get bookButton() { return element(by.css('div.book-button-wrapper a')); }
    get mapLink() { return element(by.css('a.map-link')); }
};


