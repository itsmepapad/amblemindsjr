// script.js

$(function() {
    
    $('#replaceCircle').hide();
    $('#replaceSquare').hide();
    $('#replaceTriangle').hide();
    
    
    /*  --------------
           Draggable
        --------------  */
    
    $('.dragShape').draggable({ containment: ".container", revert: 'invalid', stack: '.dragShape'});
    
    $('.dragShape').draggable();
    
    
    
    
    /*  --------------
           Droppable
        --------------  */
    
    $('.acceptShape').droppable({
       tolerance: 'intersect' 
    });
    
    $('#greyCircle').droppable({
        accept: '#blueCircle',
        
        drop: function(ev, ui) {
            $(this).hide();
            $(ui.draggable).hide();
            $('#replaceCircle').show();
        }   
    });
    
    $('#greySquare').droppable({
        accept: '#purpleSquare',
        
        drop: function(ev, ui) {
            $(this).hide();
            $(ui.draggable).hide();
            $('#replaceSquare').show();
        }   
    });
    
    $('#greyTriangle').droppable({
        accept: '#orangeTriangle',
        
        drop: function(ev, ui) {
            $(this).hide();
            $(ui.draggable).hide();
            $('#replaceTriangle').show();
        }   
    });
    


    
    
});