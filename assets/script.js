$(document).ready(function() {
 // all your jQuery code goes in here!
	$('#slide_button').click(function() {
		$('#slide').animate({
	    	width: 'toggle'
	  	}, 750, function() {
	  	});
	});

	var sounds = {

    52 : 'dsharp', //key 4
    53 : 'gsharp', //key 5
    54 : 'asharp', //key 6
    55 : 'b', //key 7 

    84 : 'chord1',
    82 : 'chord2',
    85 : 'chord3',
    89 : 'chord4',
  
   	70 : 'kick', //key f
   	71 : 'snare', //key g
   	72 : 'chant', //key h
   	74 : 'hihat', //key j

    77 : '808', //m
    86 : 'wet',
    66 : 'whoa',
    78 : 'brass'}

	document.onkeydown = function(e) {
    	var soundId = sounds[e.keyCode];
    	if (soundId) { 
    		var sound = document.getElementById(soundId);
        sound.currentTime = 0;
        sound.play();
    	}else {console.log("key not mapped : code is", e.keyCode);
    	}}


    $('body').on('keydown',function(e){
    
    if(e.which==52){
      $("#_4").show() 
      $("#_4").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==53){
      $("#_5").show() 
      $("#_5").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==54){
      $("#_6").show() 
      $("#_6").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==55){
      $("#_7").show() 
      $("#_7").fadeOut(100); 
      console.log("this is running through"); 
    }    

    if(e.which==84){
        $("#T").show();  
        $("#T").fadeOut(100);  
        console.log("this is running through"); 
    }
    if(e.which==82){
      $("#R").show() 
      $("#R").fadeOut(100); 
      console.log("this is running through"); 
    }
    if(e.which==85){
      $("#U").show()
      $("#U").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==89){
      $("#Y").show() 
      $("#Y").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==70){
      $("#F").show()
      $("#F").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==71){
      $("#G").show() 
      $("#G").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==72){
      $("#H").show() 
      $("#H").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==74){
      $("#J").show() 
      $("#J").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==86){
      $("#V").show() 
      $("#V").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==66){
      $("#B").show() 
      $("#B").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==78){
      $("#N").show() 
      $("#N").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==77){
      $("#M").show() 
      $("#M").fadeOut(100); 
      console.log("this is running through"); 
    }

  });

  $('body').click(function() {
    $('#footer').css('visibility','visible')
  });



  function move() {
    var elem = document.getElementById("loadedBar");   
    var width = 10;
    var id = setInterval(frame, 35);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  window.onload=move;

  $(document).ready(function() {
    setTimeout(fade, 3500);
  })

  $(function(){  // $(document).ready shorthand
  $('#box').delay(4000).fadeIn('fast');
});
  function fade(){
     $(".cover").fadeOut('fast');
     $('#box').hide().fadeIn(1000);
  }



});
