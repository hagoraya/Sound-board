//Waits for all elements on the page to load before running any functions
$(document).ready(function () {

    //Initialize the dialog box
    $("#CreateNewSoungDialog").dialog({
        autoOpen: false,
        modal: true,
        draggable: true,
        title: "Create Sound",
        width: 450,
        height: 200,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 500
        }
    });
    var buttonCount = 1;
    //Open up a model dialog box when addButton is pressed
    $("#addButton").click(function () {
        //Opens the dialogbox
        $("#CreateNewSoungDialog").dialog("open");

    });


    //Open the dialog box when add new sound is clicked

    $('.CreateSoundButton').on('click', function () {
        //Replace text when create button in dialog box is clicked (remove after)
        $('.myTarget').text($('.myInput').val());
        //Close dialogbox if close button is clicked in side the dialog box
        $("#CreateNewSoungDialog").dialog('close');
        //Create a new soundButton when when create button is clicked
        $(".keys").append('<div class="buttons" > <button id=soundButton' + buttonCount + '> Sound ' + buttonCount + ' </button> </div>');
        //increment buttoncount so we can keep track  of how many buttons we have made
        buttonCount++;
    });

});
