//Waits for all elements on the page to load before running any functions
$(document).ready(function () {


    //Initialize the dialog box
    $("#CreateNewSoungDialog").dialog({
        autoOpen: false,
        modal: true,
        draggable: true,
        title: "Create Sound",
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        }
        
    });

    var buttonCount = 0;
    //add new button when addButton is pressed (use # when refering to id) 
    $("#addButton").click(function () {
        buttonCount++;

        //use . when refering to class
        $(".keys").append('<div class="buttons" > <button id=soundButton' + buttonCount + '> Sound ' + buttonCount + ' </button> </div>');

    });




    //Open the dialog box when add new sound is clicked
    $("#addButton").click(function (){
        $("#CreateNewSoungDialog").dialog("open");
    });

    $('#CreateSoundButton').on('click', function () {
        $('.myTarget').text($('.myInput').val());
        $("#CreateNewSoungDialog").dialog('close');
    });

   

});

