// Show joke on load
$(function() {
  function getJSON(){
      $.ajax({
          type: 'GET',
          url: 'https://icanhazdadjoke.com',
          dataType: "json",
          requestHeaders: {"User-Agent":"http://dadbot.xyz"},
          success: function(data){
            // Get hold of the Joke text from the API
            var getJoke = JSON.stringify(data.joke);
            // Clean the responce up and remove line break characters
            var getCleanJoke = JSON.parse(getJoke.replace(/\r?\n|\r/g, ''));

            $("#joke").append(getCleanJoke);

            console.log(data.joke);

            // Get the content of the h1 element
            var jokeText = $("#joke").text()

            // Append the joke to the Twitter URL
            $("#tweet-joke").on("click", function() {
              $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + jokeText + ' - http://dadbot.xyz/random-joke');
            });
          }
      });
  }
  getJSON()
})

// Show joke on button click
$("#get-joke").click(function(e) {
    $.ajax({
        type: 'GET',
        url: 'https://icanhazdadjoke.com/',
        dataType: "json",
        accept: {
            text: "application/json"
        },
        requestHeaders: {"user-agent":"http://dadbot.xyz"},
        success: function(data){
          // Get hold of the Joke text from the API
          var getJoke = JSON.stringify(data.joke);
          // Clean the responce up and remove line break characters
          var getCleanJoke = JSON.parse(getJoke.replace(/\r?\n|\r/g, ''));

          console.log( data.joke);

          // Removes the previous joke before a new one is loaded
          $("#joke").empty() 
          // Writes the cleaned up joke responce to the h1 element
          $("#joke").append(getCleanJoke);

          // Get the content of the h1 element
          var jokeText = $("#joke").text()

          // Append the joke to the Twitter URL
          $("#tweet-joke").on("click", function() {
            $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + jokeText + ' - http://dadbot.xyz/random-joke');
          });
        }
    });


})





