/*������ 6:
 �������� JavaScript �������, ����� ������� �������� ������ ���
 ����� ���� �������� �� ����������. */

window.onload = choosePic;

var myPix = new Array("Happy_kity.jpg","hd_wallpaper_6033.jpg","hqdefault.jpg", "kitten-3.jpg",
                      "Light-Saber-Kittens-600-400.jpg", "maxresdefault.jpg", "tumblr_m78b2sfwv81qadjvwo1_1280.jpg");

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
}