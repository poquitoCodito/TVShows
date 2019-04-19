let movieId = localStorage.getItem('movieId');
var request = $.ajax({
    url: "http://api.tvmaze.com/shows/" + movieId,
    method: 'GET',
    data: {
        embed: ["cast", "seasons"]
    }
});

request.done(msg => {
    console.log(msg);
    let titleDiv = $('<h1>');
    titleDiv.text(msg.name);
    $('.singlePage').prepend(titleDiv);
    let imageDiv = $("<img>");
    imageDiv.attr('src', msg.image.original);
    $('.image-div').append(imageDiv);

    let seasonsNum;
    let seasons = $("<ul>");
    msg._embedded.seasons.forEach(function (element) {
        let seasonsItem = $('<li>');
        seasonsItem.html(`<strong>Premiere date: </strong>${element.premiereDate};  <strong>End date: </strong>${element.endDate};`);
        seasons.append(seasonsItem);
    });
    $('.seasons-div').append(seasons);

    let cast = $('<ul>');
    msg._embedded.cast.forEach(function (element) {
        let castItem = $('<li>');
        castItem.html(`<strong>Actors name: </strong>${element.person.name};`);
        cast.append(castItem);
    });
    $('.cast-div').append(cast);
});


