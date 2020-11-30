var videoTitle = document.getElementById('video_title');
var videoId = window.location.search.split('=')[1];

// videoTitle.innerHTML = 'here is page id=>' + pageId;



var videoPlayer = document.getElementById("video-player");
var videoCount = document.getElementById('views');
var videoTitle = document.getElementById("video-title");
var videoDescription = document.getElementById("video-description");




var videoPlayerArr;
xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + videoId, true);
xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
        videoPlayerArr = JSON.parse(xhttp.responseText);
        console.log(videoPlayerArr);
        videoTitle.innerHTML = videoPlayerArr.title;

        videoPlayer.src =
            "https://player.vimeo.com/video/" + videoPlayerArr.vimeoId;
        videoCount.innerHTML = "<span>" + videoPlayerArr.views / 1000 + "k" + "</span>" + " views"

        videoTitle.textContent =
            videoPlayerArr.title;
        videoDescription.textContent =
            videoPlayerArr.description;


    }
}
xhttp.send();