document.addEventListener('DOMContentLoaded', function() {

  // return search query string after "?"s
  // parse the search URL
  // append it to the checkout page
  var searchURL = window.loation.search.substring(1);
  var queryArray = searchURL.split('&');

  // i think we don't have to create empty object
  var obj = {};

  for (var i = 0; i < queryArray.length; i++) {
    var tempArray = [];
    tempArray = queryArray[i].split('=');
    
    var key = tempArray[0];
    var value = tempArray[1];

    // method 1
    obj[key] = value;

    // method 2
    // create two paragraph element and attach it to container
    // we might even need paragraph containing key
    var $pKey = document.createElement('p');
    $pKey.innerHTML = key;
    var $pVal = document.createElement('p');
    $pVal.innerHTML = value;
    // select container or placeholder so we can append
    var $elementContainer = document.querySelector('###');
    $elementContainer.appendChild($pKey);
    $elementContainer.appendChild($pVal);
  }
})
