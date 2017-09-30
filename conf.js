exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['seleniumtests/pinterestviewertest.js'],
  capabilities: {
    browserName: 'chrome'
  }  
//  multiCapabilities: [{
//    browserName: 'firefox'
//  }, {
//    browserName: 'chrome'
//  }]
};


