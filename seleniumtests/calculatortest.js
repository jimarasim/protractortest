var CalculatorPage = require('../pages/calculatorpage.js');
var calculatorPage = new CalculatorPage();

describe('Protractor Demo App', function() {
beforeEach(function() {
   calculatorPage.get();
 });

it('should add one and two', function() {
   calculatorPage.addNumbers(1,2);
   
   expect(calculatorPage.getResultText()).toEqual('3'); 
   expect(calculatorPage.getResultEntryCount()).toEqual(1);
 });

 it('should add four and six', function() {
   calculatorPage.addNumbers(4,6);

   expect(calculatorPage.getResultText()).toEqual('10');
      expect(calculatorPage.getResultEntryCount()).toEqual(1);

 });

 it('should subtract four from six', function() {
   calculatorPage.subtractNumbers(6,4);
   expect(calculatorPage.getResultText()).toEqual('2');
      expect(calculatorPage.getResultEntryCount()).toEqual(1);


 });
});



