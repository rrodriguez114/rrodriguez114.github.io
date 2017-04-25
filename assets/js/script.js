$(document).ready(function() {
	
	$("#keyboard").click(function() {
 		$("#keyboard").fadeOut(1000);
	});

	var sounds = {

    52 : 'chord1', //key 4
    53 : 'chord2', //key 5
    54 : 'chord3', //key 6
    55 : 'chord4', //key 7 

    84 : 'guitar4',
    82 : 'guitar3',
    85 : 'guitar1',
    89 : 'guitar2',
  
   	70 : 'kick1', //key f
   	71 : 'kick2', //key g
   	72 : 'snare1', //key h
   	74 : 'snare2', //key j

    77 : 'water', //m
    86 : 'crash',
    66 : 'Ghost',
    78 : 'hat'}

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
      $("#4").show() 
      $("#4").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==53){
      $("#5").show() 
      $("#5").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==54){
      $("#6").show() 
      $("#6").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==55){
      $("#7").show() 
      $("#7").fadeOut(100); 
      console.log("this is running through"); 
    }    

    if(e.which==84){
        $("#t").show();  
        $("#t").fadeOut(100);  
        console.log("this is running through"); 
    }
    if(e.which==82){
      $("#r").show() 
      $("#r").fadeOut(100); 
      console.log("this is running through"); 
    }
    if(e.which==85){
      $("#u").show()
      $("#u").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==89){
      $("#y").show() 
      $("#y").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==70){
      $("#f").show()
      $("#f").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==71){
      $("#g").show() 
      $("#g").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==72){
      $("#h").show() 
      $("#h").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==74){
      $("#j").show() 
      $("#j").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==86){
      $("#v").show() 
      $("#v").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==66){
      $("#b").show() 
      $("#b").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==78){
      $("#n").show() 
      $("#n").fadeOut(100); 
      console.log("this is running through"); 
    }

    if(e.which==77){
      $("#m").show() 
      $("#m").fadeOut(100); 
      console.log("this is running through"); 
    }

  });

  $('body').click(function() {
    $('#footer').css('visibility','visible')
  });

})

