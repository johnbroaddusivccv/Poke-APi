$('button').on("click", function(){
    function addPokeDiv(response) {
return `<h3>${response}</h3>`
}





function makeImage() {   

    
var api = "https://pokeapi.co/api/v2/";
var input = $(".form-control").val();
var pokemon = "ditto";
var query = "pokemon/" + input + "/";
var queryUrl = api + query;
console.log(queryUrl);
console.log(input);
$.ajax({
    url: queryUrl,
    method: "GET"
    }).then(function(response) {
        for (let i = 0; i < response.length; i++) {
            console.log(response[i]);
            console.log(response);
            addPokeDiv();
        }
        console.log(response.name);
    })
}



makeImage();

})


