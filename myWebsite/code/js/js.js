 

/*window.setInterval(function(){ 
    
   
    $('.c').mouseenter(function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-1'});   
       }
        
    });
    
    
    
   $('.c').trigger('mouseenter');
    
    
   
    
} , 8000);
----------------------------------------------------*/
$(document).ready(function(){
  $('.a').hide();
 setTimeout(function(){ 
    $('#text-1').show();
    $('.c1').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-1'});   
       }
        
    });
    
  
    
   $('.c1').trigger('click');
    
    
    }, 1000);
setTimeout(function(){$('#text-1').hide();}, 3000); 
    
    
    setTimeout(function(){ 
    $('#text-2').show();
    $('.c2').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-2'});   
       }
        
    });
    
  
    
   $('.c2').trigger('click');
    
    
    }, 3000);
setTimeout(function(){$('#text-2').hide();}, 5000);
    
     setTimeout(function(){ 
    $('#text-3').show();
    $('.c3').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-3'});   
       }
        
    });
    
  
    
   $('.c3').trigger('click');
    
    
    }, 5000);
setTimeout(function(){$('#text-3').hide();}, 7000);
    
    
     setTimeout(function(){ 
    $('#text-4').show();
    $('.c4').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-4'});   
       }
        
    });
    
  
    
   $('.c4').trigger('click');
    
    
    }, 7000);
setTimeout(function(){$('#text-4').hide();}, 9000);
    
     setTimeout(function(){ 
    $('#text-5').show();
    $('.c5').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-5'});   
       }
        
    });
    
  
    
   $('.c5').trigger('click');
    
    
    }, 9000);
setTimeout(function(){$('#text-5').hide();}, 11000);
    
     setTimeout(function(){ 
    $('#text-6').show();
    $('.c6').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-6'});   
       }
        
    });
    
  
    
   $('.c6').trigger('click');
    
    
    }, 11000);
setTimeout(function(){$('#text-6').hide();}, 13000);
    
    
window.setInterval( function(){

setTimeout(function(){ 
    $('#text-1').show();
    $('.c1').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-1'});   
       }
        
    });
    
  
    
   $('.c1').trigger('click');
    
    
    }, 1000);
setTimeout(function(){$('#text-1').hide();}, 3000); 
    
    
    setTimeout(function(){ 
    $('#text-2').show();
    $('.c2').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-2'});   
       }
        
    });
    
  
    
   $('.c2').trigger('click');
    
    
    }, 3000);
setTimeout(function(){$('#text-2').hide();}, 5000);
    
     setTimeout(function(){ 
    $('#text-3').show();
    $('.c3').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-3'});   
       }
        
    });
    
  
    
   $('.c3').trigger('click');
    
    
    }, 5000);
setTimeout(function(){$('#text-3').hide();}, 7000);
    
    
     setTimeout(function(){ 
    $('#text-4').show();
    $('.c4').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-4'});   
       }
        
    });
    
  
    
   $('.c4').trigger('click');
    
    
    }, 7000);
setTimeout(function(){$('#text-4').hide();}, 9000);
    
     setTimeout(function(){ 
    $('#text-5').show();
    $('.c5').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-5'});   
       }
        
    });
    
  
    
   $('.c5').trigger('click');
    
    
    }, 9000);
setTimeout(function(){$('#text-5').hide();}, 11000);
    
     setTimeout(function(){ 
    $('#text-6').show();
    $('.c6').on('click' ,function(){
        
    if($(this).hasClass('cycling')==false){ 
        $(this).charcycle({'target':'#text-6'});   
       }
        
    });
    
  
    
   $('.c6').trigger('click');
    
    
    }, 11000);
setTimeout(function(){$('#text-6').hide();}, 13000);
    
    
}, 12000);
    
});



