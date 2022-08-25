let Mau = ['#13a89e','#ffb229','#00a5e3','#ff5722','#673ab7','#b5d56a','#4886ff','#c70000'];

$(document).ready(function(){
    $("div.place > div.titles > div.Menu").addClass("wow animate__slideInLeft")
    $("div.place > div.titles > div.title").addClass("wow animate__fadeIn")
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true        
      })
      wow.init();
})

function init(){
    let Obj=document.querySelectorAll(".title h3 > a");
    for(let s of Obj){
        let arr = parseInt(Math.random()*Mau.length);
       s.style.background=Mau[arr];
    }
}

function imgFirst(){
    document.getElementById("slideShow").src="images/banner_0.jpg";
}
function imgLast(){
     document.getElementById("slideShow").src="images/banner_3.jpg";
}
function imgPrev(){
    document.getElementById("slideShow").src="images/banner_1.jpg";
}
function imgNext(){
    document.getElementById("slideShow").src="images/banner_2.jpg";
}

