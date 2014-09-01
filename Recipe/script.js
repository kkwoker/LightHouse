$(document).ready(function() {
  console.log("Script included!");


  $('#hide-images').click(function(){
  		$('#slice').fadeToggle();
  		$('#stew').fadeToggle();
  		$('#stew2').fadeToggle();
  		$(this).text

  })
  $('#hide-images').hover(function(){
  		$(this).css("background-color",'rgb(0,255,20)');
  		$(this).css("cursor","pointer");
  },function(){
  		$(this).css("background-color","Yellow");
  })






  $('.need').hover(function(){
  		$(this).text("GOT IT");
  		$(this).css("background-color","rgb(0,255,20)")	;
  },function(){
  		$(this).css("background-color","Yellow");
  		$(this).text("NEED IT");
  });

  $('.need').click(function(){
  		$(this).off("mouseenter mouseleave");
  		$(this).text("GOT IT");
  		$(this).parent().css("text-decoration","line-through");

  });

  $('#clear-ingredients').click(function(){
  		$('.need').text("NEED IT");
  		$('.need').css("background-color","Yellow");
  		$('.need').parent().css("text-decoration","none");
  		$('.need').on("mouseenter mouseleave",hover);//NOT WORKING
  });







  $('.step').hover(function(){
  		$(this).css("cursor","pointer");
  		$(this).addClass("hovering");
  	},function(){
  		$(this).removeClass("hovering");
  	});
  $('.step').click(function(){
  		$(this).text("DONE");
  		
  		$(this).parent().css("text-decoration","line-through");
  		$(this).unbind("mouseenter mouseleave");
  })

  $('#clear-directions').click(function(){
  		
  		$('.step').css("background-color","Yellow");
  		$('.step').parent().css("text-decoration","none");
  })
  $('#clear-directions').hover(function(){
  		$(this).css("cursor","pointer");
  }, function(){

  })

 
});