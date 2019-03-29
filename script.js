$(document).ready(function () {

    $("#search").on('click', function () {
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + $("#singers").val(),
            dataType: "jsonp",
            success: function (answer) {
                console.log(answer);
                showMusic(answer);
            
            }
        });
        $("#table").empty();

    });


    $("#clear").on('click',function () {
        $("#table").empty();
    })


});



function showMusic(json){
    $("#clear").show();

    var lines = "";
    json.resultCount = $("#output").val();
    for (var i=0; i<json.resultCount; i++){


        lines += "<tr>";
        lines += "<td><img src='" + json.results[i].artworkUrl100 + "'></td>";
        lines += "<td></td>";
        lines += "<td>" + "<a href='detail.html?artist=" + json.results[i].artistName + "&song=" + i + "'>" + json.results[i].trackName + "</a>" + "</td>";
        lines += "<td><audio controls='true' src='" + json.results[i].previewUrl + "' id='audio' type='audio/m4a'></audio></td>";
        lines += "</tr>";

    }
    $("#table").append(lines);
    
}


