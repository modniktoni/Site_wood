const width_btn = document.querySelector('.width_button').onclick = widthClick;
const square_btn = document.querySelector('.square_button').onclick = squareClick;
const length_btn = document.querySelector('.length_button').onclick = lengthClick;
const depth_btn = document.querySelector('.depth_button').onclick = depthClick;
const sum_btn = document.querySelector('.sum_button').onclick = sumhClick;
function widthClick(){
    let width_board = +document.querySelector('.width_board').value;
    if (!width_board){document.querySelector('.result').innerHTML = "Введите число";
}
}
function depthClick(){
    let depth_board = +document.querySelector('.depth_board').value;
    let width_board = +document.querySelector('.width_board').value;
    if (!depth_board){document.querySelector('.result').innerHTML = "Введите число";
    
}
let cube = (depth_board / 100) * (width_board / 100) * 6;
    return cube; 
}
function lengthClick(){
    let length_board = +document.querySelector('.length_board').value;
    if (!length_board){document.querySelector('.result').innerHTML = "Введите число";
}
}
function squareClick(){
    let square = +document.querySelector('.square').value;
    if (!square){document.querySelector('.result').innerHTML = "Введите число";
}
}
function sumhClick() {
    let width_board = +document.querySelector('.width_board').value;
    let length_board = +document.querySelector('.length_board').value;
    let square = +document.querySelector('.square').value;
    let sum = square / length_board;
    let score = sum / (width_board / 100);
    let cube_sum = depthClick();
    let cubatura = (cube_sum * Math.ceil(score)).toFixed(2);
 
    if (score < 10) {
    let from_1_to_10 = function (){
        if(score > 4){
            return " досок";
        }else if (score > 1){
            return " доски"
        } else{
            return " доска"
        }
    }
    document.querySelector('.result').innerHTML = 
    "Вам потребуется " + Math.ceil(score) + from_1_to_10() + " или " + cubatura + " м3 пиломатериала";
}
    else {let digits = (Math.ceil(score)).toString();
    let char =  digits.slice(-2);
    let from_10 = function (char){
        let text_form1 = " доска";
        let text_form2 = " доски";
        let text_form3 = " досок";
        if (char == 00) {return text_form3};
        if (char == 01) {return text_form1};
        if (char > 01 && char < 05) {return text_form2};
        if (char > 04 && char < 10) {return text_form3};
        if (char == 10) {return text_form3};
        if (char > 10 && char < 21) {return text_form3};
        if (char == 21) {return text_form1};
        if (char > 21 && char < 25) {return text_form2};
        if (char > 24 && char < 31) {return text_form3};
        if (char == 31) {return text_form1};
        if (char > 31 && char < 35) {return text_form2};
        if (char > 34 && char < 41) {return text_form3};
        if (char == 41) {return text_form1};
        if (char > 41 && char < 45) {return text_form2};
        if (char > 44 && char < 51) {return text_form3};
        if (char == 51) {return text_form1};
        if (char > 51 && char < 55) {return text_form2};
        if (char > 54 && char < 61) {return text_form3};
        if (char == 61) {return text_form1};
        if (char > 61 && char < 65) {return text_form2};
        if (char > 64 && char < 71) {return text_form3};
        if (char == 71) {return text_form1};
        if (char > 71 && char < 75) {return text_form2};
        if (char > 74 && char < 81) {return text_form3};
        if (char == 81) {return text_form1};
        if (char > 81 && char < 85) {return text_form2};
        if (char > 84 && char < 91) {return text_form3};
        if (char == 91) {return text_form1};
        if (char > 91 && char < 95) {return text_form2};
        if (char > 94) {return text_form3};
    }
if (char) {document.querySelector('.result').innerHTML = "Вам потребуется "
 + Math.ceil(score) + from_10(char) + " или " + cubatura + " м3 пиломатериала"
}
else{document.querySelector('.result').innerHTML = "Введите число";
}
if(!width_board || !length_board || !square){
    document.querySelector('.result').innerHTML = "Введите число"
}
}
}
