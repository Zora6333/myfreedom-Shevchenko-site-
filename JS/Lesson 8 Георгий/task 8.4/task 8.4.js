let but = document.getElementById('but1')
let but2 = document.getElementById('but2')
let pupe = document.getElementById('pup')
let  block = document.getElementById('block')
but.onclick = function ClickBut1() {
    document.getElementById('but1').style.display = 'none';
    document.getElementById('but2').style.display = 'block';
    document.getElementById('pup').style.opacity = '1';
    document.getElementById('pup').style.visibility = 'visible';
}
but2.onclick = function ClickBut2() {
    document.getElementById('but2').style.display = 'none';
    document.getElementById('but1').style.display = 'block';
    document.getElementById('pup').style.opacity = '0';
    document.getElementById('pup').style.visibility = 'hidden';
}
pupe.onclick = function ClickPupe() {
    document.getElementById('but2').style.display = 'none';
    document.getElementById('but1').style.display = 'block';
    document.getElementById('pup').style.opacity = '0';
    document.getElementById('pup').style.visibility = 'hidden';
}
