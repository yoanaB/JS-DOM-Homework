/*������ 9:
 ��������� ��������, � ����� ��� ����� � ����� ������ � ��� �������
 �� ����� ����� ����� ������ �� �� ������� ��-������ ������ ��
 �������. ��� ������ �� ������� �� �������� �� �� ������ ��������
 ������. */

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


