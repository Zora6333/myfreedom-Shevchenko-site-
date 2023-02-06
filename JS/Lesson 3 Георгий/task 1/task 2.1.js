
  i = prompt('Введите число')
  max = prompt('Введите максимальное число')
  min = prompt('Введите минимальное число')
function threeNumber() {
  if (i >= min || i <= max) {
    console.log(min + 'входит в диапазон чисел' + max)
  } else {
    console.log('Не входит в диапазон')
  }
}
threeNumber()