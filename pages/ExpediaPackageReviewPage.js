/* global by */

module.exports = class ExpediaPackageReviewPage {
    get completeBookingButton() { return element(by.id('complete-booking')); }
    get firstName() { return element(by.id('firstname[0]')); }
    get lastName() { return element(by.id('lastname[0]')); }
};


