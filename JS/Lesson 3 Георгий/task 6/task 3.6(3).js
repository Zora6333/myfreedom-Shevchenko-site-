
let anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

let i = 0;
let empty = [];
let maximum = 0;

while (i < anyNumber.length) {
  if (anyNumber[i] > maximum) {
    maximum = anyNumber[i]
  }

  i++;
} for (i = 0; i < anyNumber.length; i++) {


  if (anyNumber[i] == maximum) {
    empty.push(i);
  }

}
alert("Позиции (индексы) максимального числа в массиве: " + empty);

alert("Максимальное число массива: " + maximum);