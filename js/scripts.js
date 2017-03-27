$(document).ready(function(){
  $("form#favs").submit(function(event){
    var favorites = [];
    favorites.push($("input#color").val());
    favorites.push($("input#food").val());
    favorites.push($("input#movie").val());
    $(".results").show(favorites);
    debugger;
    console.log(favorites);
    event.preventDefault();
  });
});
