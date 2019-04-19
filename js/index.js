var xhttp = new XMLHttpRequest();
var url = "http://api.tvmaze.com/shows";


xhttp.open("GET", url, true);
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.response);
    console.log(data);


    data.forEach(function(movie){
    var movieCard = document.createElement("div");
    var movieImage = document.createElement("img");
    movieImage.src = movie.image.original;
    var movieElement = document.createElement("h4");
    movieElement.classList.add("card-title");
    var movieTitle = document.createTextNode(movie.name);
    movieElement.appendChild(movieTitle);
    var movieButton = document.createElement("a");
    var movieText = document.createTextNode("click for more");
    movieButton.classList.add("btn");
    movieButton.appendChild(movieText);
    movieButton.classList.add("btn-primary");
    var container = document.getElementsByClassName("row")[0];
    container.appendChild(movieCard);
    movieCard.appendChild(movieImage);
    movieImage.classList.add("card-img-top");
    movieCard.appendChild(movieElement);
    movieCard.classList.add("card");
    movieCard.appendChild(movieButton);
    });


    }
  };

