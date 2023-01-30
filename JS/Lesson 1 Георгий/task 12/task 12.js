let firstNumber = prompt('Количество дней');

if (firstNumber >= 7) {
    alert((firstNumber * 40) - 50);
} else if (firstNumber >= 3) {
    alert((firstNumber * 40) - 20);
} else if (firstNumber < 3) {
    alert(firstNumber * 40);
}

