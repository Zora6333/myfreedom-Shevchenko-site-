
  var  strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
var unique = strings.filter((value, index, array) => array.indexOf(value) === index);

console.log(unique);