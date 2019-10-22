 function goldbanch(){
   var num = document.getElementById('ounum').value
   if(num%2!==0){
     alert("这是奇数！")
   }
   isTrue(num);

   // 判断一个数是否是质数
   function factorial(a){
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
 // 判断用户输入的偶数是否可分为两个质数之和：
 
   function isTrue(a){
     var arr = []
     var str = ""
     for(var i=2;i<a-2;i++){
       var j = a -i;
       if(factorial(i)&&factorial(j)){
 
           arr.push("<div>"+a+"可以拆分为两个质数"+ i+"与"+j+"的和"+"</div>");
           
       }
     }
     for (var i = 0; i < arr.length; i++) {
       str += arr[i];
       show.innerHTML = str
   }
     
  }
 }
