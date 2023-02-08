
function sumObjectValues() {
     
 
              
        function sumSalaries() { 
                const objectWithNumbers = {
                a: 10,
                b: 20,
                c: 'string',
                d: 12,
        }
        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
              alert( sumValues );        
}
sumObjectValues(sumSalaries)