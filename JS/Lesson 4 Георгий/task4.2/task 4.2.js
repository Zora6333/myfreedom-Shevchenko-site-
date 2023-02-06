function square(a) {
  console.log(a * a)
   square = () => console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
}

square(10) 

square()