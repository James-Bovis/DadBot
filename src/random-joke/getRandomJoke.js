function getJSON(){
    $.ajax({
        type: 'GET',
        url: 'https://icanhazdadjoke.com',
        dataType: "json",
        requestHeaders: {"User-Agent":"http://dadbot.xyz"},
        success: function(data){
          console.log( data.joke);
          $("#joke").append(JSON.stringify(data.joke));
        }
    });
}
getJSON()

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
        }
    });
})