$("#loadMore").click(function(event){
    event.preventDefault();    
    url = $(this).attr('href');
    $.get(url, function(data){

        // Replace the content
        console.log($(data).find('.wrapper').html());
        $(".wrapper:eq(0)").append($(data).find('.wrapper:eq(0)').html());
        var new_href = $(data).find('#loadMore').attr('href');
        $(this).attr('href', new_href);

    });
});
