function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomNumber() {
    do{let X = prompt('Введите число')
    if (getRandomInteger(0, 10) != X) {
        alert('Вы не угадали!');
    } else {
        alert('Вы  угадали!');
        break;
  }
} while (true); 
}

getRandomNumber(getRandomInteger) 