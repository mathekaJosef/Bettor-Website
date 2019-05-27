$('nav div').click(function(){
   $('ul').slideToggle();
   $('ul ul').css('display', 'none');
});

$("ul li").click(function(){
   $("ul ul").slideUp();
  $(this).find("ul").slideToggle();
});

$(window).resize(function(){
  if($(window).width() > 768){
    $('ul').removeAttr('style');
   }
})

// $(window).on('scroll', function(){
// 	if($(window).scrollTop()){
// 		$('nav').addClass('white');
// 	}else{
// 		$('nav').fadeOut();
// 	}
// })

/*********Pro Btn***************/
function fadeOut(){
    TweenMax.to(".myBtn", 1, { 
        y: -100,
        opacity: 0
    });

    TweenMax.to(".btn", 1, {
        y: -100,
        opacity: 0
    });
            
    TweenMax.to (".screen", 2, {
        y: -400,
        opacity: 0,
        ease: powe2.easeInOut,
        delay: 2
    });
}

/***************ongoing projects********************/

let img = document.getElementsByClassName("imgcontainer");
let i = img.length - 1;

let dn = "display:none;"
let l2 = "height:80px; width:130px; transform: translate(-190px,0px); z-index: 1;  ";
let l1 = "z-index:2;transform:translate(-300px); ";
let m = "height:288px; width:512px;z-index:3;";
let r1 = "margin-left: -60px; z-index: 2;transform:translate(300px);";
let r2 = " height:80px; width:130px; transform: translate(190px,0px); z-index: 1;";

for (aft4 = 5; aft4 < i + 1; aft4++) {
    //  console.log(aft4);
    img[aft4].style = "display:none;";
}

img[0].style = l2;
img[1].style = l1;
img[2].style = m;
img[3].style = r1;
img[4].style = r2;

let ass = setInterval(btn0, 5000);
function btn0() {
    var i0 = setInterval(frame0, 10);
    var h0 = 80;
    var w0 = 130;
    var t0x = -190;


    var h1 = 144;
    var w1 = 256;
    var t1x = -300;


    var h2 = 288;
    var w2 = 512;
    var t2x = 0;

    var h3 = 144;
    var w3 = 256;
    var t3x = 300;

    function frame0() {
     if (h0 > 144 && w0 > 256 && t0x < -300 && h1 == 288 && w1 > 512 && t1x == 0 && h2 == 144 && w2 < 256 && t== 270 && h3 < 80 && w3 < 130 && t3x < 220) {
            clearInterval(i0);

     }
     else {
         if (h0 < 144) { h0 = h0 + 1.5 }
         if (w0 < 256) { w0 = w0 + 2.8 }
         if (t0x > -300) { t0x = t0x - 3 }
         img[0].style.height = h0 + "px";
         img[0].style.width = w0 + "px";
         img[0].style.transform = "translate(" + t0x + "px)";
         img[0].style.zIndex = "3";
            //     console.log(h0, w0, t0x);

         if (h1 < 288) { h1 = h1 + 1.5; }
         if (w1 < 512) { w1 = w1 + 2.7; }
         if (t1x < 0) { t1x = t1x + 3; }
         img[1].style.height = h1 + "px";
         img[1].style.width = w1 + "px";
         img[1].style.transform = "translate(" + t1x + "px)";
         img[1].style.zIndex = "5";
            //     console.log(h1, w1, t1x);

         if (h2 > 144) { h2 = h2 - 1.5; }
         if (w2 > 256) { w2 = w2 - 2.7; }
         if (t2x < 270) { t2x = t2x + 3; }
         img[2].style.height = h2 + "px";
         img[2].style.width = w2 + "px";
         img[2].style.transform = "translate(" + t2x + "px)";
         img[2].style.zIndex = "3";
            //   console.log(h2, w2, t2x);

         if (h3 > 80) { h3 = h3 - 1.5; }
         if (w3 > 130) { w3 = w3 - 2.7; }
         if (t3x > 220) { t3x = t3x - 3; }
         img[3].style.height = h3 + "px";
         img[3].style.width = w3 + "px";
         img[3].style.transform = "translate(" + t3x + "px)";
         img[3].style.zIndex = "1";
            //    console.log(h3, w3, t3x);
     }

    }
    img[i].parentNode.insertBefore(img[i], img[0]);
    img[0].style = l2;
    img[1].style = l1;
    img[2].style = m;
    img[3].style = r1;
    img[4].style = r2;

    for (aft4 = 5; aft4 < i + 1; aft4++) {
        //       console.log(aft4);
        img[aft4].style = "display:none;";
    }
}
