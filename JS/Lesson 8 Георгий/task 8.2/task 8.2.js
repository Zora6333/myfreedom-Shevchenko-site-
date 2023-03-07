let counter1 = makeCounter(); 
let counter2 = makeCounter();
function makeCounter(){
    let count = 0;
    return function() {
      return count++;
    };
}
alert( counter1() ); 
alert( counter1() ); 
alert( counter2() )