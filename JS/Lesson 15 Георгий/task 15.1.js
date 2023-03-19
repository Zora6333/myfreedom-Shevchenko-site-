const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.coinlore.net/api/tickers/')

xhr.send()
xhr.onload = () => {
if (xhr.status != 200) {
    // обработать ошибку
    const [a] = JSON.parse(xhr.response)
    console.log(a)
    alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
} else {
    // вывести результат
    alert(xhr.responseText);
}}
