$(document).ready(function () {
    var back = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink',
                'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
    $('#add').on('click', function(){
        var rand = back[Math.floor(Math.random() * back.length)];
        $('.basket').append(`<div class="ball" style="background-color:${rand}"></div>`);
    });

    $('#remove').on('click', function(){
        $('.ball:last-child()').remove();
    });
    
});