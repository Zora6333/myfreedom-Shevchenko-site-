function makeCounter() {
  var currentCount = 155;

  return function() {
    return currentCount*2;
  };
}
var counter = makeCounter(); 


alert( counter() );