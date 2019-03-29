
$.ajax({
    url: "https://itunes.apple.com/search?term=" + getQueryParameter("artist"),
    dataType: "jsonp",
    success: function (answer) {
        console.log(answer);
        showMusic(answer);

    }
});







function showMusic(json){
    $("#newTable").empty();
    var lines = "";
    var dates = new Date(json.results[getQueryParameter("song")].releaseDate);
    var x = (json.results[getQueryParameter("song")].trackTimeMillis)/1000;
    var min = Math.floor(x/60);
    var sec = Math.floor(x)%60;
    var explicit = json.results[getQueryParameter("song")].trackExplicitness;
    var price = json.results[getQueryParameter("song")].trackPrice;
    var genre = json.results[getQueryParameter("song")].primaryGenreName;

    lines += "<tr>";
   lines += "<td><img src='" + json.results[getQueryParameter("song")].artworkUrl100 + "'></td>";
    lines += "<td>" + min + ":" + sec + " minutes" + "</td>";
    lines += "<td></td>";
    lines += "<td><audio controls='true' src='" + json.results[getQueryParameter("song")].previewUrl + "' id='audio' type='audio/m4a'></audio></td>";
    lines += "<td></td>";
    lines += "</tr><tr>";
    lines += "<td>" + "Release Date: " + dates.getMonth() + "/" + dates.getDay() + "/" + dates.getFullYear() + "</td>";
   lines += "<tr></tr>";
    lines += "<td>" + "Eplicitness: " + explicit + "</td>";
    lines += "</tr>";


    $("#table").append(lines);

}


function getQueryParameter(name)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}

