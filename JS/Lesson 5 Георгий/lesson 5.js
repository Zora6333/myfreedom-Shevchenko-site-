// task 1 //
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("привет") ); 

//task 2 //
str = prompt('Введите')
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam(str) );
  //task 3//
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
  }
  reverseString('Привет Женя');
//task 4 //
const list = document.querySelector('.output ul');
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  let code = input.slice(0,3);
  let semiC = input.indexOf(';');
  let name = input.slice(semiC + 1);
  let result = code + ': ' + name;
  let listItem = document.createElement('li');
  listItem.textContent = result;
console.log(listItem);
}
//task 5 //
var  strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
var unique = strings.filter((value, index, array) => array.indexOf(value) === index);

console.log(unique);