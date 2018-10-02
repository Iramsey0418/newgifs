$(document).ready(function(){
  var dogs = ["Siberian Husky","Alaskan Malamute","German Shepherd","Golden Retriever","Bulldog","Chihuahua","Pug","Poodle","Beagle","Dobermann","Rottweiler","Schnauzer"]

   
    function displaydogGIFS() {

      var dog = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=oadofQxt5WRfoS5f3P1HSWTg55CDYYf0";

      
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response){
        $("#dogview").empty();

        var results = response.data;

       
        console.log(response);

        
        for(var i = 0; i < results.length; i++) {

          
          var dogDiv = $("<div>");

          
          dogDiv.addClass("dogpictures");

         
          var rating = results[i].rating;
          var p = $("<h2>").text("Rating: " + rating);

         
          var dogImage = $("<img>");
          dogImage.attr("src", results[i].images.fixed_height_still.url);
          dogImage.attr("data-still", results[i].images.fixed_height_still.url);
          dogImage.attr("data-animate", results[i].images.fixed_height.url);
          dogImage.attr("data-state", "still");
          dogImage.addClass('dogImage');

          
          dogDiv.prepend(p);

          
          dogDiv.prepend(dogImage);
          $("#dogview").prepend(dogDiv);
        }

        $(".dogImage").on("click", function() {
          var state = $(this).attr("data-state");
          console.log(state);

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
      });        
    }

   
    function renderButtons() {

    
      $("#dogbuttons").empty();

      for(var i = 0; i < dogs.length; i++) {

        var dogAdd = $("<button>");

        dogAdd.addClass("dog");

        dogAdd.attr("data-name", dogs[i]);

        dogAdd.text(dogs[i]);

        
        $("#dogbuttons").append(dogAdd);
      }
    }

    
    $("#add-dog").on("click", function(event){
      event.preventDefault();

      var dog = $("#dog-input").val().trim();

      
      dogs.push(dog);

      
      renderButtons();
    });

    
    $(document).on("click", ".dog", displaydogGIFS);

    
    renderButtons();
});







      //var dogs = ["Siberian Husky","Alaskan Malamute","German Shepherd","Golden Retriever","Bulldog","Chihuahua","Pug","Poodle","Beagle","Dobermann","Rottweiler","Schnauzer"]
    
 


