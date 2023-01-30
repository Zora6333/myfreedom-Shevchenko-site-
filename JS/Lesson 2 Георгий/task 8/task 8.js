let X = prompt('Введите строку')
function getRandomRGB(X) {
    function get_random_color() 
    {
        var color = "";
        for(var i = 0; i < 3; i++) {
            var sub = Math.floor(Math.random() * 256).toString(16);
            color += (sub.length == 1 ? "0" + sub : sub);
        }
        return "#" + color;
    }}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    } alert (X)