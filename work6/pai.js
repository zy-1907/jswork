//计算按钮
function calculate(){
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
       document.getElementById('pai').value = pi(num)
    }else{
      ale()
    }
}
//声明阶乘函数 n!
function factorial(n){
    //
    let sum = 1

    for(let i=1;i<=n;++i){
        sum *=i
    }
    return sum
}

//(2n+1)!!
function oddFactorial(n){
    let sum =1
    for(let i=1;i<=n;++i){
    sum *=((2*i)+1)
    }
    return sum
}



//提示输入数字
function ale(){
    alert("请输入小于50的阶乘")
}
//计算圆周率
function pi(num){
   
    let sum = 0
  
    for(let i=0;i<=num;++i){
        let dividend = factorial(i)
        let divior = oddFactorial(i)
        sum += (dividend/divior)
    }
    return sum*2
}
calculate()