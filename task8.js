/*Задача 8:
 Напишете JavaScript функция, която да добавя редове към
 таблица.Тествайте върху HTML документ. */

function addRow(){
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}