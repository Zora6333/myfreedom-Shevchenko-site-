let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.addEventListener('click', () => {
    document.body.style.background = 'url("./img/i (1).webp")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = ' center center'
});

img2.addEventListener('click', () => {
    document.body.style.background = 'url("./img/i (2).webp")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = '  center center'
});

img3.addEventListener('click', () => {
    document.body.style.background = 'url("./img/i (3).webp")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = '100%'
    document.body.style.backgroundPosition = ' center center'
});


