/*Задача 9:
 Направете страница, в която има албум с малки снимки и при слагане
 на мишка върху някоя снимка да се показва по-голяма снимка на
 малката. При махане на мишката от снимката да се скрива голямата
 снимка. */

function biggerImg(e) {
    e.target.style.width = "350px";
    e.target.style.height = "auto";
}
function normalImg(e) {
    e.target.style.width = "300px";
    e.target.style.height = "200px";
}
var img = document.getElementsByTagName("img");

window.onload = function () {
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", biggerImg);
        img[i].addEventListener("mouseout", normalImg);
    }
};


