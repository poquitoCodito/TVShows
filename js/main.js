
var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET"
});


request.done(msg => {
    // console.log(msg);
    msg.forEach(function (element) {
        let $htmlDiv = $(`
            <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="" alt="${element.name}">
            <div class="card-body">
            <h4 class="card-title">${element.name}</h4>
                    <a href="#" class="btn btn-primary" data-show-id="${element.id}">Movie info</a>
                    </div>
            </div>`
        );
        
        if(element.image !== null){
            $htmlDiv.find('img').attr('src', element.image.medium);
        }else{
            $htmlDiv.find('img').attr('src'," http://via.placeholder.com/300x400");
            
        }
        
        $('.row').append($htmlDiv);
    });
});

$(document).on('click', 'a', function () {
    let movieId = $(this).attr('data-show-id');
    console.log(movieId);
    localStorage.setItem('movieId', movieId);
    location.replace('single.html');    
});

//search movie in list
$("#searchshow").on('keypress', function(){
    let input = $('#searchshow').val();
    console.log(input);
    let request = $.ajax({
        url: " http://api.tvmaze.com/search/shows",
        data:{
            q:input
        }
    });
    request.done(msg => {
        console.log(msg);
        $('.searchList').html('');
       
        msg.forEach(function(element, index){
            let searchItem = $("<li>");
            let searchLink = $('<a>');
            searchLink.attr({
                href:"#",
                "data-show-id": element.show.id
            });
            searchLink.text(element.show.name); 

            searchItem.append(searchLink);
            $('.searchList').append(searchItem);
        });
    });
    
});




