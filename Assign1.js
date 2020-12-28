
$(document).ready(function(){

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: (x) => {
            x.forEach(data => {
                console.log(JSON.stringify(data));

                var img = data.thumbnailUrl;
                var drawImg = `<img src=${img} style=""/>`;

               
                $('body').append(`<div style="border: 1px solid black;float: left; width: 15%; height: 20%;
                font-size: 10px;margin: auto;align-content: center; display: inline-block; positionl; absolute; overflow-wrap: break-word;white-space: pre-line;">${drawImg}<br><br>${data.title}</div>`);
                
            })
        }
    })
})