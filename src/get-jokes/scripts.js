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