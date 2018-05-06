exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./seleniumtests/expediahometest.js', './seleniumtests/expediabookpackagetest.js'],
  capabilities: {
    browserName: 'chrome'
  }  
};


