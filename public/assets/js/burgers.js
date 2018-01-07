// Makes sure to wait to attach handlers until the DOM is fully loaded.
$(function() {

  // When clicking on the devour button, the burger's devoured state will be change to true and will be reflected in the database
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: true
    };

    // Sends the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("Changed devour to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // When clicking on the submit button, a new burger will be created in the database with a name from the text input box
  $(".create-form").on("submit", function(event) {
    // Makes sure to preventDefault on a submit event.
    event.preventDefault();

    if($("#burgerName").val().trim() === "") {
      $("#submitError").html("Please enter a burger name!");
    }
    else {
      $("#submitError").empty();
      var newBurger = {
        burgerName: $("#burgerName").val().trim()
      };

      // Sends the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reloads the page to get the updated list
          location.reload();
        }
      );
    }
  });

  // When clicking on the delete button, the burger will be removed from the database
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Sends the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reloads the page to get the updated list
        location.reload();
      }
    );
  });
});
