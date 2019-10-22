function bubbleSort(str) {
    let arr = str.split(',')
    //用于动画显示的数组
    let sortLog = []
    //比较轮数等于数组长度-1轮
    for (let i=0;i<arr.length-1;i++){
        //从第一个开始比较相邻的两个数值
        for (let j=0;j<arr.length-i-1;j++){
            //把比较前的数组状态和定位指针保存到sortLog中
            sortLog.push([arr.concat(),[j,j+1]])
            //比较相邻的两个元素，大的交换到右边
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                //比较后的数组状态和定位指针保存到sortLog
                sortLog.push([arr.concat(),[j,j+1]])
            }
        }
    }
    //把排序最终状态的数组和取消定位指针保存到sortLog中，因为动画的最后状态是不显示比较数据的
    sortLog.push([arr.concat(),[-1,-1]])
    //console.log(sortLog)
    return sortLog
}

function insertSort(str) {
    let arr=str.split(',')
    let sortLog = []
    for (let i=1;i<arr.length;i++){
        for (let j=i;j>0;j--){
            sortLog.push([arr.concat(),[j-1,j]])
            sortLog.push([arr.concat(),[j-1,j]])
            sortLog.push([arr.concat(),[j-1,j]])

            if(arr[j-1]>arr[j]){
                [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
                sortLog.push([arr.concat(),[j-1,j]])
            }
        }
    }
    sortLog.push([arr.concat(),[-1,-1]])
    return sortLog
}
    //显示排序每个步骤
function showLog(logValues,showElement) {
    let str = ''
    //解构赋值,从排序日志遍历器取出一条结果赋值给row和pos变量
    let {done,value:[row,pos]}=logValues.next()
    //console.log(row)
    //console.log(pos)
    for(const key in row){
        let color = pos.indexOf(Number(key))>-1?'color:red;':''

        str += '<span style="font-size: '+row[key]*20+'px;'+ color+
            '">'+ row[key] +'</span>'
    }

    showElement.innerHTML=str
    //如果定位指针不是-1（最后一条记录），就调用函数显示下一条记录
    if(pos[0]!==-1)
        setTimeout("showLog(logValues,showDiv)",500)
}