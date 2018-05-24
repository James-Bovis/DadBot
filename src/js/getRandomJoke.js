// Show joke on load
$(function() {
  function getJSON(){
      $.ajax({
          type: 'GET',
          url: 'https://icanhazdadjoke.com',
          dataType: "json",
          requestHeaders: {"User-Agent":"http://dadbot.xyz"},
          success: function(data){
            console.log( data.joke);
            $("#joke").append(JSON.stringify(data.joke));

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
          console.log( data.joke);
          $("#joke").empty() // Removes the previous joke before a new one is loaded
          $("#joke").append(JSON.stringify(data.joke));

          // Get the content of the h1 element
          var jokeText = $("#joke").text()

          // Append the joke to the Twitter URL
          $("#tweet-joke").on("click", function() {
            $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + jokeText + ' - http://dadbot.xyz/random-joke');
          });
        }
    });


})





