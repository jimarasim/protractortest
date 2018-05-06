exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['seleniumtests/craigslisthometest.js'],
  capabilities: {
    browserName: 'chrome'
  }  
};


