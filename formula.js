const width_btn = document.querySelector('.width_button').onclick = widthClick;
const square_btn = document.querySelector('.square_button').onclick = squareClick;
const length_btn = document.querySelector('.length_button').onclick = lengthClick;
const sum_btn = document.querySelector('.sum_button').onclick = sumhClick;
function widthClick(){
    let width_board = +document.querySelector('.width_board').value;
    console.log(width_board)
    if (!width_board){document.querySelector('.result').innerHTML = "Введите число";
}
}
function lengthClick(){
    let length_board = +document.querySelector('.length_board').value;
    console.log(length_board)
    if (!length_board){document.querySelector('.result').innerHTML = "Число должно быть выше 0";
}
}

function squareClick(){
    let square = +document.querySelector('.square').value;
    console.log(square);
    if (!square){document.querySelector('.result').innerHTML = "Введен 0";
}
}
function sumhClick() {
    let width_board = +document.querySelector('.width_board').value;
    let length_board = +document.querySelector('.length_board').value;
    let square = +document.querySelector('.square').value;
    let sum = square / length_board;
    let score = sum / (width_board / 100);
    console.log(score);
    let digits = (Math.ceil(score)).toString();
    let char = digits[digits.length-1];
    console.log(char);
 


console.log(Math.ceil(score));
if (sum) {document.querySelector('.result').innerHTML = "Вам потребуется " + Math.ceil(score) + (char !== 0 ? " досок" : char > 4 ? " досок" : " доски")
 
}
else{document.querySelector('.result').innerHTML = "Ведите число больше 0";
}
if(!width_board || !length_board || !square){
    document.querySelector('.result').innerHTML = "Ведите число больше 0"
}
}
