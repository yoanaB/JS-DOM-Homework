/*������ 10:
 ��������� ��������� �� ������� �� �����������. ��� ������������ ��
 � ����� ����� ���� ��������� �� ������� � �� ���� ��������
 ���������. ������ ������������ ������ ������ - �� �� ���� ���������.
 ������ ������������ ������ ������� other �� �� �� ������� ��� ����
 ���� �� ������ ���������, �� ����� �. */

window.onload = function () {
    hasValue();
    var input = document.getElementsByTagName("input");
    for(var i = 0; i < input.length; i++){
        input[i].addEventListener("change", hasValue);
    }

    document.getElementsByTagName("select").country.addEventListener("change", selectCountry);
}

function hasValue(){
    var input = document.getElementsByTagName("input");
    for(var i = 0; i < input.length; i++){
        if(input[i].value === ""){
            input[i].style.border = "1px solid red";
            if(i == 2){
                selectCountry();
            }
            else{
                document.getElementsByTagName("p")[i].innerHTML = "Please enter sthn..."
            }
        }
        else{
            input[i].style.border = "1px solid black";
            document.getElementsByTagName("p")[i].innerHTML = ""
        }
    }
}

function selectCountry(){
    var elem = document.getElementsByTagName("select");
    if(elem.country.options[elem.country.selectedIndex].value === "other"){
        document.getElementById("otherCountry").style.visibility = "visible";
    }
    else{
        document.getElementById("otherCountry").style.visibility = "hidden";
    }
}