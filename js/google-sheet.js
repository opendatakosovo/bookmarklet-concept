// Variable to hold request
var request;

// Bind to the submit event of our form
$("#form").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();
    
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized. Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx7sfbYkzSSifBkzZkp4MDdV9OhhWnzHv9i3m85Yz00jEJ59jg/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // console.log(textStatus);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: "+ textStatus, errorThrown);
    });

    // Reenable the inputs, Callback handler that will be called regardless if the request failed or succeeded
    request.always(function () {
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});