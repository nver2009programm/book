const parent = document.querySelector('.book'); // получаем родителя
const divs = parent.querySelectorAll('div'); // получаем все div внутри родителя




var number = 1

document.getElementById("next").onclick = function() {

    number++;
    if (number > divs.length) {
        number = 1;
    }
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    divs[number - 1].style.display = 'flex';

}

document.getElementById("past").onclick = function() {
    number--;
    if (number < 1) {
        number = divs.length;
    }
    for(let i = divs.length - 1; i >= 0; i--) {
        divs[i].style.display = 'none';
    
    divs[number - 1].style.display = 'flex';
}
}






