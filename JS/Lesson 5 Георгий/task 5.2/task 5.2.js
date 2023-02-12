str = prompt('Введите')
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('badword') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam(str) );
  
