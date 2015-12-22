/*Задача 7:
 Напише JavaScript функционалност, която конвертира от kg в lb и
 обратно.
 1kg = 2.20462262 lb */

function convert(){
    var toConvert = document.getElementById("toConvert").value;
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    if(first.options[first.selectedIndex].value === "kg" &&
        second.options[second.selectedIndex].value === "lb"){
        document.getElementsByTagName("p")[0].innerHTML = parseFloat(toConvert) * 2.20462262185;
    }
    else if(first.options[first.selectedIndex].value === "lb" &&
            second.options[second.selectedIndex].value === "kg"){
        document.getElementsByTagName("p")[0].innerHTML = parseFloat(toConvert) *  0.45359237;
    }
    else{
        document.getElementsByTagName("p")[0].innerHTML = toConvert;
    }
}