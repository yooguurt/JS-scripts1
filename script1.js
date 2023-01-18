'use strict';


// ЧАСЫ  
function usersNumber() {
const usersNumber1 = document.getElementById("minuteString").value;
let quest1Info = 0;
if (usersNumber1 < 1440) {
    quest1Info = document.getElementById('firstQuest').innerText = `Время: ${Math.trunc(usersNumber1 / 60)} : ${usersNumber1 % 60}`;
} 
document.getElementById('firstQuest').innerText = quest1Info;
};
/* else (usersNumber >= 1440) {
    document.getElementById('firstQuest').textContent = `Прошло ${usersNumber / 1440} дня`;
} чет не работал промпт, когда элс этот писал. Закомментил его просто*/


// HELLO
function usersName() {
    const userName1 = document.getElementById("nameString").value;
    document.getElementById('secondQuest').innerText = `Hello, ${userName1}!`;
};


//CЛЕДУЮЩЕЕ И ПРЕДЫДУЩЕЕ
function neighbors() {
const numbersNeighbors = document.getElementById("NeighborsString").value;
document.getElementById('threeQuest').innerText = `The next number for the number ${numbersNeighbors} is ${+numbersNeighbors + 1}. \n The previous number for the number ${numbersNeighbors} is ${numbersNeighbors - 1}.`
}

// ПАРТЫ 
function desks() {
const firstClass = document.getElementById("desksString1").value;
const secondClass = document.getElementById("desksString2").value;
const threeClass = document.getElementById("desksString3").value;
document.getElementById('fourQuest').innerText = `Нужно закупить ${Math.ceil(firstClass / 2) + Math.ceil(secondClass / 2) + Math.ceil(threeClass / 2)} парты.`;
};

//ШНУРКИ 
function laces() {
const a = document.getElementById("lacesString1").value;
const b = document.getElementById("lacesString2").value;
const I = document.getElementById("lacesString3").value;
const N = document.getElementById("lacesString4").value;
document.getElementById('fiveQuest').innerText = `Нужен шнурок длиной ${(I * 2) + ((a * 2) * N) + (b * N)}`;
};

// МИНИМУМ ИЗ ДВУХ ЧИСЕЛ 
/* этот вариантик, но он не получился
let firstNumber = prompt("Напишите целое число", "");
let secondNumber = prompt("Напишите целое число", "");
if (firstNumber > secondNumber) {
document.getElementById('sixQuest').textContent = secondNumber
} else (firstNumber < secondNumber) {
    document.getElementById('sixQuest').textContent = firstNumber
} */  
function minimumNumber1() {
const integer1 = document.getElementById("minimumNumberString1").value;
const integer2 = document.getElementById("minimumNumberString2").value;
let smallInt;
    if (Number(integer1) > Number(integer2)) {
        smallInt = integer2;
    } else {
        smallInt = integer1;
    }
document.getElementById('sixQuest').innerText = `Наименьшее число ${smallInt}`;
};


// ЗНАК ЧИСЛА
/* function sign(x) {
    if (x > 0) {
        return 1
    } else if (x < 0) {
        return -1
    } else if (x == 0) {
        return 0
    }
};
sign(x); */


// ШАХМАТНАЯ ДОСКА
function chessBoard() {
let blackChessCell = ['a1', 'c1', 'e1', 'g1', 'b2', 'd2', 'f2', 'h2', 'a3', 'c3', 'e3', 'g3', 'b4', 'd4', 'f4', 'h4', 'a5', 'c5', 'e5', 'g5', 'b6', 'd6', 'f6', 'h6', 'a7', 'c7', 'e7', 'g7', 'b8', 'd8', 'f8', 'h8'];
let whiteChessCell = ['b1', 'd1', 'f1', 'h1', 'a2', 'c2', 'e2', 'g2', 'b3', 'd3', 'f3', 'h3', 'a4', 'c4', 'e4', 'g4', 'b5', 'd5', 'f5', 'h5', 'a6', 'c6', 'e6', 'g6', 'b7', 'd7', 'f7', 'h7', 'a8', 'c8', 'e8', 'g8'];
let firstCell = document.getElementById("ChessBoardString1").value;
let secondCell = document.getElementById("ChessBoardString2").value;
let answerMeaning 
    if (blackChessCell.includes(firstCell) && blackChessCell.includes(secondCell) == true) {
        answerMeaning = 'YES';
    } else if (whiteChessCell.includes(firstCell) && whiteChessCell.includes(secondCell) == true) {
        answerMeaning = 'YES';
    } else {
        answerMeaning = 'NO';
    }
document.getElementById('eightQuest').innerText= answerMeaning;
};

// ВИСОКОСНЫЙ ГОД
function leapYear() {
const userYear = document.getElementById("leapYearString1").value;
let yearAnswer
    if ((userYear % 4 === 0 && userYear % 100 != 0) || userYear % 400 === 0 ) {
        yearAnswer = "YES";
    } else {
        yearAnswer = "NO";
    }
document.getElementById('nineQuest').innerText = yearAnswer;
};

// МИНИМУМ ИЗ ТРЁХ ЧИСЕЛ 
/* ПОЧЕМУ-ТО ЭТИМ СПОСОБОМ ВОЗВРАЩАЕТ ВСЕГДА NaN
let integerOne = prompt('Введите первое целое число', '');
let integerTwo = prompt('Введите второе целое число', '');
let integerThree = prompt('Введите третье целое число', '');
let integers = [integerOne, integerTwo, integerThree];
document.getElementById('tenQuest').textContent = `Наименьшее число - ${Math.min(integers)}`;  */

function minimumNumber2() {
const integerOne = document.getElementById("minimumNumber2String1").value;
const integerTwo = document.getElementById("minimumNumber2String2").value;
const integerThree = document.getElementById("minimumNumber3String3").value;
let minimumNumber2Answer
    if (Number(integerOne) < Number(integerTwo) && Number(integerOne) < Number(integerThree)) {
        minimumNumber2Answer = integerOne
    } else if (Number(integerTwo) < Number(integerOne) && Number(integerTwo) < Number(integerThree)) {
        minimumNumber2Answer = integerTwo
    } else {
        minimumNumber2Answer = integerThree
    }
document.getElementById('tenQuest').innerText = `Наименьшее число - ${minimumNumber2Answer}`;
};

// СОВПАДЕНИЕ? НЕ ДУМАЮ...
function numberOfClones() {
const firstInt = document.getElementById("numberOfClonesString1").value;
const secondInt = document.getElementById("numberOfClonesString2").value;
const thirdInt = document.getElementById("numberOfClonesString3").value;
let numberOfClonesAnswer
    if (firstInt === secondInt && secondInt === thirdInt && firstInt === thirdInt) {
        numberOfClonesAnswer = 3
    } else if (firstInt === secondInt || secondInt === thirdInt || thirdInt === firstInt) {
        numberOfClonesAnswer = 2
    } else {
        numberOfClonesAnswer = 0
    }
document.getElementById('elevenQuest').innerText = numberOfClonesAnswer;
};

// ХОД ЛАДЬИ
function chessRookMove() {
const chessField1 = document.getElementById("ChessRookMoveString1").value;
const chessField2 = document.getElementById("ChessRookMoveString2").value;
let ChessRookMoveAnswer
    if (chessField1.charAt(0) === chessField2.charAt(0) || chessField1.charAt(1) === chessField2.charAt(1)) {
        ChessRookMoveAnswer = 'YES';
    } else {
        ChessRookMoveAnswer = 'NO';
    }
document.getElementById('twelveQuest').innerText = ChessRookMoveAnswer;
};

// ХОД КОРОЛЕВЫ
function chessQueenMove() {
const chessFieldOne = document.getElementById("ChessQueenMoveString1").value;
const chessFieldTwo = document.getElementById("ChessQueenMoveString2").value;
let x1 = Number(chessFieldOne.charAt(1));
let y1 = chessFieldOne.charCodeAt(0);
let x2 = Number(chessFieldTwo.charAt(1));
let y2 = chessFieldTwo.charCodeAt(0);
let ChessQueenMoveAnswer
if (y1 === y2 || x1 === x2 || Math.abs(x2 - x1) === Math.abs(y2 - y1)) {
        ChessQueenMoveAnswer = 'YES';
    } else {
        ChessQueenMoveAnswer = 'NO';
    }
document.getElementById('thirteenQuest').innerText = ChessQueenMoveAnswer;
};