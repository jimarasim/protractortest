var CalculatorPage = function(){ 
  //PRIVATE
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var minusOption = element(by.css('option[value=SUBTRACTION]'));
  var resultEntry = element.all(by.repeater('result in memory'));
  
  //PUBLIC
  this.get = function(){
      browser.get('http://juliemr.github.io/protractor-demo/');
  };
  
  this.addNumbers = function(first,second){
      firstNumber.sendKeys(first);
      secondNumber.sendKeys(second);
      goButton.click();
  };
  
 this.subtractNumbers = function(first,second){
    firstNumber.sendKeys(first);
    secondNumber.sendKeys(second);
    minusOption.click();

    goButton.click();
  };
  
  this.getResultText = function(){
      return latestResult.getText();
  };
  
  this.getResultEntryCount = function(){
      return resultEntry.count();
  };
};

module.exports = CalculatorPage;


