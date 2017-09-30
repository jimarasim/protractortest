var CraigslistResultsPage = function(){ 
  //PRIVATE
  var resultViewDropdown = element(by.id("gridview"));
  var resultsList = element.all(by.css('li.result-row'));
  var resultsListAnchors = element.all(by.css('li.result-row a'));
  
  //PUBLIC
  this.waitFor = function(){
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(resultViewDropdown), 5000, 'Element resultViewDropdown taking too long to appear in the DOM');
  };
  
  this.getResultsCount = function(){
      return resultsList.count();
  };
  
  this.visitResults = function(){
        var anchors = new Array();
        resultsListAnchors.each(function(anchor){
            anchor.getAttribute('href').then(function(href){
                console.log(href);
                anchors.push(href);
            });
        }).then(function(){
            for(var i=0;i<anchors.length;i++){
                browser.get(anchors[i]);
            }
        });
  };

};

module.exports = CraigslistResultsPage;


