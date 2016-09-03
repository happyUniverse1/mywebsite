
    
        $('.but').click(function(){
            $('nav').slideToggle(200);
             
            var content = $('button').html();
            
            if(content === 'More'){
                $('button').html('Less');
            }else{
                $('button').html('More');
            }
        });
