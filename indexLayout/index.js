( window.onload= function(){     
    var stop=document.getElementById("d");
    var div=document.getElementById("d");
    var speedx=6;
    var speedy=8;
    var t=null;
    btn=function(){
        clearInterval(t);
        t=setInterval(function(){
            var l=div.offsetLeft+speedx;
            var t=div.offsetTop+speedy;

            if(l>=document.documentElement.clientWidth-div.offsetWidth){
                speedx*=-1;
                l=document.documentElement.clientWidth-div.offsetWidth;
            }else if(l<=0){
                speedx*=-1;
                l=0;
            }
            if(t>=document.documentElement.clientHeight-div.offsetHeight){
                speedy*=-1;
                t=document.documentElement.clientHeight-div.offsetHeight;
            }else if(t<=0){
                speedy*=-1;
                t=0;
            }
            div.style.left=l+"px";
            div.style.top=t+"px";
        },50);
    }
    stop.onmouseenter = function(){
        clearInterval(t);
       
    }
    stop.onmouseleave =function(){
        btn();
    }
    show=function(){
        document.getElementById("show").style.display="";
        setTimeout(function(){
            document.getElementById("show").style.display="none";
        },3000)
        
    }

    btn();
    
})
