//9x9空表格
str = '<table border="1">'
for(let i=9;i>0;--i){  //外控制行
    str += '<tr>'
    for(var j=9;j>0;--j){ //控制列
        str +='<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str +='</table>'
document.getElementById('table1').innerHTML = str


//倒九九
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str

//倒九九乘法表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;'+i+'x'+j+'='+(i*j) +'</td>'
    }
    str += '</tr>'
}
str +='</table>'
document.getElementById('table3').innerHTML = str
