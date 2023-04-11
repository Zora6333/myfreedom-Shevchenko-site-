let con = document.querySelector('#content')

con.addEventListener('click', function () {
    fetch('http://localhost:4000').then(value => { document.div.style.backgraund = (value.data) })
});