function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
X = prompt('Введите число')
function getRandomNumber() {
    if (getRandomInteger(0, 10) != X) {
        alert('Вы не угадали!');
    } else {
        alert('Вы  угадали!');
  }
}

getRandomNumber(getRandomInteger)    