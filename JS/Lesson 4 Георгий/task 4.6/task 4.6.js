

        function sumSalaries() {
                const objectWithNumbers = {
                        a: 10,
                        b: 20,
                        c: 'string',
                        d: 12,
                }
                let sum = 0

                for(let key in objectWithNumbers){
                        if (typeof objectWithNumbers[key] === 'number') {
                                sum += objectWithNumbers[key]
                        }
                }
                alert(sum)
        }
sumSalaries()