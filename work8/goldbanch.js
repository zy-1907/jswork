function goldbanch() {
  var num = document.getElementById('ounum').value
  if (num <= 2 || num % 2 !== 0) {
    alert("请输入一个大于2的偶数")
  } else {
    find(num)
  }
}

function isPrime(number) {

  var count = 0;

  for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  }
}

function find(n) {//输入8

  var arr = []
  for (var i = 1; i < n; i++) { //i=1 1<=8 y=7 //i=2 2<=8 y=6 //i=3 3<=8 y=5 true
    //i=4 4<=8 y=4 //i=5 5<=8 y=3 true //i=6 6<=8 y=2
    //i=7 7<=8 y=1 //i=8 8<=8 y=0
    var y = n - i;


    if (isPrime(y) && isPrime(i)) {
      arr.push([y, i])  //因为会重复输出所以把素数加到数组，通过比较把重复的去掉
    }
  }
//通过比较去掉重复的输出
                /*[0][0]=[1][1]
                  [0][1]=[1][0]

                  [1][0]=[2][1]
                  [1][1]=[2][0]

                  [2][0]=[3][1]
                  [2][1]=[3][0]
                */
  for(let bj=1;bj<arr.length;bj++){
                 
    if((arr[bj-1][0] == arr[bj][1]||arr[bj][0]==arr[bj][1])){
      if((arr[bj-1][1] ==arr[bj][0])||arr[bj][0]==arr[bj][1]){

        if(arr[bj][0]==arr[bj][1]){
          /*当输入26时  0: (2) [23, 3]
                       1: (2) [19, 7]
                       2: (2) [13,13]
                       3: (2) [7, 19]
                       4: (2) [3, 23]*/
          arr.splice(bj+1)
        }else{

          //console.log(bj)
          arr.splice(bj)//返回无重复的新数组
        }
      }
      
    }
    
  }
      var str =""
      for (var i = 0; i < arr.length; i++) {
       // console.log( arr[i])
        str+="<div>"+n+"可以被拆分为两个素数"+arr[i][0]+"和"+arr[i][1]+"的和"+"</div>" 
     }
  show.innerHTML = str
}










