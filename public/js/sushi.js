
$(function() {
    $(".remove-sushi").on("click", function() {
      const sushiId = $(this).attr("data-id");
  
      console.log(sushiId);
  
      $.ajax("/api/sushi/" + sushiId, {
        method: "DELETE"
      }).then(function() {
        console.log("This sushi was deleted succesfully!");
  
        window.location = "/";
      });
    });
  
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newsdevour");
  
      var newDevourState = {
        devour: newDevour
      };
  
      $.ajax("/api/sushi/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newSushi = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/sushi", {
        type: "POST",
        data: newSushi
      }).then(
        function() {
          console.log("created new sushi roll");
          location.reload();
        }
      );
    });
  });