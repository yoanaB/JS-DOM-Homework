/*Задача 1:
 Напишете JavaScript програма, която по даден array да показва най-
 често срещания символ.
 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 Резултат: a ( 5 times )
*/

function mostFrequent(arr){
    var count = 0;
    var maxCount = 0;
    var mostFrElem = "";
    var elem = "";
    for(var i = 0 in arr){
        count = 0;
        elem = "";
        for(var j = i + 1  in arr){
            if(arr[i] == arr[j]){
                count++;
                elem = arr[i];
            }
        }
        if(count > maxCount){
            maxCount = count;
            mostFrElem = elem;
        }
    }
    console.log(mostFrElem + " ( " + maxCount +" times)")
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequent(arr1);

