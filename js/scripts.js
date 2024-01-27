include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include('js/hoverSprite.js');
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/forms.js");
include("js/MathUtils.js");



function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false, content, showMenu = false;



function addAllListeners() {
    $('footer ul a').hover(
        function (){
            $(this).children('img').stop().animate({'top':'-21px'},350,'easeOutExpo');
        },
        function (){
            $(this).children('img').stop().animate({'top':'0px'},350,'easeOutExpo');
        }
    );
    $('.list1>li>a,.slider figure>div>a,.list3>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
	
	//(".next").hoverSprite({onLoadWebSite: true});
	//(".prev").hoverSprite({onLoadWebSite: true});
    $('.next').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'-20px center'},50,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'-30px center'},50,'easeOutCubic');
        }
    );
    $('.prev').hover(
        function(){
               $(this).stop().animate({'backgroundPosition':'0px center'},50,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'10px center'},50,'easeOutCubic');
        }
    );
	
/*  $('.menu_drag').hover(
        function(){  
		if(showMenu==true){
                $('.menu').stop().animate({'top':'-280px'},800,'easeOutExpo',function(){showMenu = false});
            }          
            
           
        }
    );
	 $('.menu_drag').hover(
        function(){            
            if(showMenu==false){
                $('.menu').stop().animate({'top':'-500px'},800,'easeOutExpo',function(){showMenu = true});
            }
            
        }
    );*/
	
	
	 $('.menu').hover(
        function(){  
		
                $('#menu').stop().animate({'top':'-270px'},800,'easeOutExpo');
                     
            
           
        },
		function(){  
		   $('#menu').stop().animate({'top':'-520px'},800,'easeOutExpo');
		console.log("1")
		}
		
    );
	
	//$('.menu').bind
	//('mouseleave',function (){
		//$('.menu').stop().animate({'top':'-520px'},800,'easeOutExpo');
//		});
	
}





/*splash engine*/

function hideSplash(){
	//$("body").stop(true).delay(100).animate({'min-height':'880px'}, 500, 'easeOutCubic');
    $('.menu').stop().animate({'top':'-240px'},500,'easeInExpo')
        .delay(200).animate({'top':'-270px'},800,'easeOutExpo');
	$('.logo').stop().animate({'top':'-100px'},1000,'easeOutExpo');
	$('.bg_pic').stop().animate({'top':'-130px'},500,'easeOutExpo');
	//$('.menu').css({opacity:1},500,'easeOutExpo');
	
}
function hideSplashQ(){
   // $('.menu').css({'top':'30px'});
}
function showSplash(){
//$("body").stop(true).delay(300).animate({'min-height':'400px'}, 500, 'easeOutCubic');
     $('.menu').stop().animate({'top':'-800px'},500,'easeOutExpo');
	 $('.logo').delay(500).animate({'top':'10px'},1000,'easeOutExpo');
	 $('.bg_pic').delay(500).animate({'top':'0'},500,'easeOutExpo');
	 //$('.menu').css({opacity:0},500,'easeOutExpo');
	  
}

/*end splash engine*/

$(document).ready(ON_READY);
function ON_READY() {
  //  $('.bg_pic').css({opacity:0});
	
    //	$('.menu').css({opacity:0});

    $('.bg_right').stop().animate({'right':'-400px'});
	$('.bg_left').stop().animate({'left':'-400px'});	
	$('.logo').stop().animate({'top':'-500px'});
	
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').animate({'opacity':0},2000,'easeOutCubic',function (){$(this).css('display','none')});
	$('.bg_pic').animate({'opacity':1},2000,'easeOutCubic');
    $('.logo').stop().animate({'top':'0'},2000,'easeOutExpo');
    $('.bg_right').stop().animate({'right':'0'},1500,'easeOutExpo');
	$(".enter").hoverSprite({onLoadWebSite: true});
	if (MSIE) {
	$('.bg_pic').css({opacity:1});
    
}
	$('.bg_left').stop().animate({'left':'0'},1500,'easeOutExpo');	
	
    $('.list1>li>a,.slider figure>div>a,.list3>li>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    

    
    $(".carousel").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev"
    });
    
    //.toggle();
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
			
			 if (_.n !== 0){
				 if($.browser.msie)window.console={log:function(){}}
				 //  $(window).trigger('resize');
                   // $("body").stop(true).delay(100).animate({'min-height':'880px'}, 500, 'easeOutCubic');
				   
					//$("body").stop(true).delay(100).animate({'min-height':'760px'}, 500, 'easeOutCubic');
                } 
            _.li.css({'display':'none'});

        // $('.logo').stop(true).css({'top':'0px'});
           hideSplashQ();
        },
        actFu:function(_){ 
		
			/*					
		if(hashChange){
			 if (_.n !== 0){
	$("body").stop(true).delay(100).animate({'min-height':'880px'}, 500, 'easeOutCubic');
    $('.menu').stop().animate({'top':'-330px'},800,'easeOutExpo');
	$('.logo').stop().animate({'top':'-100px'},1000,'easeOutExpo');
	$('.bg_pic').stop().animate({'top':'-130px'},500,'easeOutExpo');
				 }
			
			}*/
		
		       
    
            if(_.curr){
				

                if (_.n == 0){
                    showSplash();
					//$("body").stop(true).delay(100).animate({'min-height':'760px'}, 500, 'easeOutCubic');
                } 
				
				 if (_.n !== 0){
                 //   $("body").stop(true).delay(100).animate({'min-height':'880px'}, 500, 'easeOutCubic');
                } 
                
                //console.log(_.pren);
				if ((_.pren == 0 ) || ((_.pren == undefined) && (_.n != 0))) {
                    hideSplash();
                }
                _.curr
                    .css({'left':'2000px','visibility':'visible'}).stop(true).delay(300).show().animate({'left':'0px'},{duration:1200,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'-2000px'},{duration:700,easing:'easeInExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }           
  		}
    });
    
    var nav = $('.menu');
    nav
    .navs({
		useHash:true,
        defHash: '#!/page_splash',
      hoverIn:function(li){
            $('>a', li).stop().animate({'backgroundPosition':'center top'},350,'easeOutExpo');
                $('>a>span',li).stop().animate({'height':'100%'},500,'easeOutCubic');
            if (!MSIE) {
    			$('>a>b',li).css({'color':'#e10908'});
            } else {
    			$('>a>b',li).css({'color':'#e10908'});
            }
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a', li).stop().animate({'backgroundPosition':'center bottom'},700,'easeOutCubic');
                    $('>a>span',li).stop().animate({'height':'0'},700,'easeOutCubic');
                if (!MSIE) {
    				$('>a>b',li).css({'color':'#fff'});
                } else {
    				$('>a>b',li).css({'color':'#fff'});
                }
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) content.stop().animate({'top':(windowH()-content.height())*.5},500,'easeOutCubic');
});


function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}
listen("load", window, ON_LOAD);