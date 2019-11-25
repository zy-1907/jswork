
let year = new Date().getFullYear()
document.getElementById("cal").innerHTML=calendar(year)
document.getElementById("curyear").innerHTML=year
var cur = parseInt( document.getElementById("curyear").innerHTML)
document.getElementById('curyear').setAttribute('data-year', year);
var pre = cur-1
var nex = cur+1
document.getElementById('preyear').setAttribute('data-year', pre);
document.getElementById('nextyear').setAttribute('data-year', nex);
 document.getElementById("preyear").innerHTML="<<"+pre
 document.getElementById("nextyear").innerHTML=nex+">>"

function setCalendar(year){
    var pre = parseInt(year)-1 
    var nex = parseInt(year)+1
    console.log(nex)
     //curyear
    document.getElementById('curyear').setAttribute('data-year', year);
    document.getElementById('curyear').innerHTML = year
    //nextyear
    document.getElementById('nextyear').setAttribute('data-year', nex);
    document.getElementById("nextyear").innerHTML=nex+">>"
    //cal显示年历
    document.getElementById("cal").innerHTML=calendar(year)
    //preyear
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById("preyear").innerHTML="<<"+pre
}
    

