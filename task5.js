/*Задача 5:
 Напишете JavaScript функция, която смята обема на сфера по подаден
 радиус. */

function findV(){
    var value = document.getElementById("radius").value;
    document.getElementById("result").value = (Math.pow(value, 3) * Math.PI * 4) / 3;
}