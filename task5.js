/*������ 5:
 �������� JavaScript �������, ����� ����� ����� �� ����� �� �������
 ������. */

function findV(){
    var value = document.getElementById("radius").value;
    document.getElementById("result").value = (Math.pow(value, 3) * Math.PI * 4) / 3;
}