function sort(method) {
    let origin = document.getElementById('origin').value
    let logs
    if(method ==='bubble'){
        logs = bubbleSort(origin)
    }
    else if(method ==='insert'){
        logs = insertSort(origin)
    }
     showDiv = document.getElementById('Anim')
    //生成排序日志数组的遍历器对象
     logValues = logs.values()
    //遍历器对象返回的数据结构
     console.log(logValues.next())
     //延时调用showLog，调用一次显示一条排序状态
     setTimeout("showLog(logValues,showDiv)",50)
}