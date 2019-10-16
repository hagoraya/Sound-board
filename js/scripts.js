//Waits for all elements on the page to load before running any functions
$(document).ready(function(){ 

    var buttonCount = 0;
   //add new button when addButton is pressed (use # when refering to id) 
   $("#addButton").click(function(){
       buttonCount++;

       //use . when refering to class
        $(".keys").append('<div class="buttons" > <button id=soundButton'+buttonCount+'> Sound '+buttonCount+' </button> </div>');

   });
    


      

});

