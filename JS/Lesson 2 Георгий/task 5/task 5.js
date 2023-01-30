let i = prompt('Введите число')
for (let i = 1; i < 101; i++) {

    if (i % 3) {
      alert('Fizz');
    }
    if (i % 5) {
        alert('Buzz');
      }
      if (i % 5 & i % 3)  {
        alert('FizzBuzz');
      }
  }