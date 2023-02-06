
  let anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
  var maximum = 70; 

  var empty = [];
  
  for(i = 0; i < anyNumber.length; i++)
  {
  
  
  if(anyNumber[i] == maximum)
  {
  empty.push(i); 
  }
  
  } 
 console.log("Позиции (индексы) максимального числа в массиве: " + empty);