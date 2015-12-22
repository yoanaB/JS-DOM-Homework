/*Задача 3:
Напишете JavaScript, който да изкарава popup с innerHTML на елемент
по дадено id. */

function popUp(id){
    alert(document.getElementById(id).innerHTML)
}

popUp("demo");