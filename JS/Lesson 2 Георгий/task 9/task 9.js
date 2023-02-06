
function iteration(n) {

    for (i = 0; i < n; i += 0.5) {
        if (Number.isInteger(i)) {
            console.log(i + 'integer');

        } else  {
            alert(i + 'decimal')
        }
    }
}

iteration(10)