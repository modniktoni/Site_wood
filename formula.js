// let 

const width_btn = document.querySelector('.width_button').onclick = widthClick;
const square_btn = document.querySelector('.square_button').onclick = squareClick;
const length_btn = document.querySelector('.length_button').onclick = lengthClick;
const sum_btn = document.querySelector('.length_button').onclick = sumhClick;
function widthClick(){
    let width_board = document.querySelector('.width_board').value;
    console.log(width_board)
}
function lengthClick(){
    let length_board = document.querySelector('.length_board').value;
    console.log(length_board)
}

function squareClick(){
    let square = document.querySelector('.square').value;
 
    console.log(square);
    
}
function sumhClick() {
    let width_board = document.querySelector('.width_board').value;
    let length_board = document.querySelector('.length_board').value;
    let square = document.querySelector('.square').value;
    let sum = square / length_board;
    let score = sum / width_board;
console.log(sum);
console.log(Math.round(score));
document.querySelector('.result').innerHTML = Math.round(score) + " досок";
}





const length_board = document.querySelector('._board');

// const height_board = 
// const room_area = 