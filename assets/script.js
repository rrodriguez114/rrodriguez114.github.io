$(document).ready(function() {
 // all your jQuery code goes in here!
  $('#_03').click(function(e) {  
    $("#_4").show() 
    $("#_4").fadeOut(100); 
    $("#dsharp")[0].currentTime=0;
    $("#dsharp")[0].play();
  });

  $('#_13').click(function(e) {  
    $("#_5").show() 
    $("#_5").fadeOut(100);
    $("#gsharp")[0].currentTime=0; 
    $("#gsharp")[0].play();
  });

  $('#_23').click(function(e) {  
    $("#_6").show() 
    $("#_6").fadeOut(100); 
    $("#asharp")[0].currentTime=0;
    $("#asharp")[0].play();
  });

  $('#_33').click(function(e) {  
    $("#_7").show() 
    $("#_7").fadeOut(100); 
    $("#b")[0].currentTime=0;
    $("#b")[0].play();
  });

  $('#_02').click(function(e) {  
    $("#R").show() 
    $("#R").fadeOut(100); 
    $("#chord1")[0].currentTime=0;
    $("#chord1")[0].play();
  });
  
  $('#_12').click(function(e) {  
    $("#T").show() 
    $("#T").fadeOut(100);
    $("#chord2")[0].currentTime=0;
    $("#chord2")[0].play(); 
  });

  $('#_22').click(function(e) {  
    $("#Y").show() 
    $("#Y").fadeOut(100); 
    $("#chord3")[0].currentTime=0;
    $("#chord3")[0].play();
  });

  $('#_32').click(function(e) {  
    $("#U").show() 
    $("#U").fadeOut(100); 
    $("#chord4")[0].currentTime=0;
    $("#chord4")[0].play();
  });

  $('#_01').click(function(e) {  
    $("#F").show() 
    $("#F").fadeOut(100); 
    $("#kick")[0].currentTime=0;
    $("#kick")[0].play();
  });

  $('#_11').click(function(e) {  
    $("#G").show() 
    $("#G").fadeOut(100); 
    $("#snare")[0].currentTime=0;
    $("#snare")[0].play();
  });

  $('#_21').click(function(e) {  
    $("#H").show() 
    $("#H").fadeOut(100); 
    $("#chant")[0].currentTime=0;
    $("#chant")[0].play();
  });

  $('#_31').click(function(e) {  
    $("#J").show() 
    $("#J").fadeOut(100); 
    $("#hihat")[0].currentTime=0;
    $("#hihat")[0].play();
  });

  $('#_00').click(function(e) {  
    $("#V").show() 
    $("#V").fadeOut(100); 
    $("#808")[0].currentTime=0;
    $("#808")[0].play();
  });

  $('#_10').click(function(e) {  
    $("#B").show() 
    $("#B").fadeOut(100); 
    $("#wet")[0].currentTime=0;
    $("#wet")[0].play();
  });

  $('#_20').click(function(e) {  
    $("#N").show() 
    $("#N").fadeOut(100);
    $("#whoa")[0].currentTime=0; 
    $("#whoa")[0].play();
  });

  $('#_30').click(function(e) {  
    $("#M").show() 
    $("#M").fadeOut(100);
    $("#brass")[0].currentTime=0;
    $("#brass")[0].play(); 
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
    var id = setInterval(frame, 30);
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
    setTimeout(fade, 3000);
  })

  $(function(){  // $(document).ready shorthand
  $('#box').delay(3500).fadeIn('fast');
});
  function fade(){
     $(".cover").fadeOut('fast');
     $('#box').hide().fadeIn(1000);
  }



});
