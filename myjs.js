/* jquey animation- slider down when click navbar button*/

$(document).ready(function(){
$('a[href*="#"]:not([href="#"])').click(function() { // define call back
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

/* make text value upper on focusout  */ 
	$("#name").focusout(function(){
	 var name = $("#name").val();
	 var newname= name.toUpperCase();
     $("#name").val(newname);

});

/* jquery effects-meke change color of textboxes when mouse enter and leave */

$("#name").on({
mouseenter:function(){
$(this).css("background-color","#ffffb3");
},
mouseleave:function(){
$(this).css("background-color","white");}
});

$("#email").on({
mouseenter:function(){
$(this).css("background-color","#ffffb3");
},
mouseleave:function(){
$(this).css("background-color","white");},
});

$("#comments").on({
mouseenter:function(){
$(this).css("background-color","#ffffb3");
},
mouseleave:function(){
$(this).css("background-color","white");},
});


/* hide comment part on click and double click*/
$("#hide").click(function(){
        $("#comments").slideUp(2000);
    });

	$("#hide").dblclick(function(){
        $("#comments").slideDown(2000);
    });



/*animation on company name*/

$("#cname").on({
mouseenter:function(){
$(this).animate({fontSize: '80px'}, "slow");
},
mouseleave:function(){
$(this).animate({fontSize: '+3em'}, "slow");}
});
});