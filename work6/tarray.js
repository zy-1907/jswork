var arr = [1,2,3,4,2,5,6,2,7,2];
document.getElementById('array').innerHTML = arr.toString()

var index = 0,newArry = [];
for(var i in arr){
    if(arr[i] != 2){
        newArry[index] = arr[i];
        ++index;
    }

}
document.getElementById('transArray').innerText = newArry.toString()