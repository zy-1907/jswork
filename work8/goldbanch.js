  // 输入任意一个大于2的偶数并返回结果;
  var num = document.getElementById('gold').value
  isTrue(num);

  //functiono gold(num){}

  // 判断是否是质数
  function goldbach(a){
      var sum=0;
      for(var i=1;i<=a;i++){
          if(a % i ==0){
              sum++;
          }
      }
      if(sum==2){
          return true;
      }else{
          return false;
      }
  }

//质素之和
  function isTrue(a){
    for(var i=2;i<a-2;i++){
      var j = a -i;
      if(goldbach(i)&&goldbach(j)){
           //print(a+"可以拆分为两个质数"+ i+"与"+j+"的和")
           str = a+"可以拆分为两个质数"+ i+"与"+j+"的和"
           document.getElementById('goldbach').innerHTML=str;
        console(a+"可以拆分为两个质数"+ i+"与"+j+"的和")
      }
    }
  }