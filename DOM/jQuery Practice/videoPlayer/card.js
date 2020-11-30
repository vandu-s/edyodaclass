var mainContainer = document.getElementById("main-container");
var mainHeading = document.createElement("h1");
mainHeading.id = "main-heading";
mainContainer.appendChild(mainHeading);
mainHeading.innerHTML = "The Video Player";

var playerSection = document.createElement("div");
playerSection.id = "player-section";

var playlistWrapper = document.createElement("div");
playlistWrapper.id = "playlist-wrapper";

var playerWrapper = document.createElement("div");
playerWrapper.id = "player-wrapper";

var videoIFrame = document.createElement("iframe");
videoIFrame.id = "video-player";
videoIFrame.style.border = "0";
videoIFrame.setAttribute("webkitallowfullscreen", "");
videoIFrame.setAttribute("mozallowfullscreen", "");
videoIFrame.setAttribute("allowFullScreen", "");
playerWrapper.appendChild(videoIFrame);
var videoSummarryWrapper = document.createElement("div");
var videoActions = document.createElement("div");
videoActions.id = "video-actions";
var viewCount = document.createElement("p");
var viewCountSpan = document.createElement("span");
viewCountSpan.id = "views-count";
viewCount.appendChild(viewCountSpan);
var viewCountText = document.createTextNode(" views");
viewCount.appendChild(viewCountText);
videoActions.appendChild(viewCount);
var videoIconWrapper = document.createElement("div");
var heartIcon = document.createElement("i");
heartIcon.className = "far fa-heart";
videoIconWrapper.appendChild(heartIcon);
var commentIcon = document.createElement("i");
commentIcon.className = "far fa-comment-alt";
videoIconWrapper.appendChild(commentIcon);
var bookmarkIcon = document.createElement("i");
bookmarkIcon.className = "far fa-bookmark";
videoIconWrapper.appendChild(bookmarkIcon);
videoActions.appendChild(videoIconWrapper);

videoSummarryWrapper.appendChild(videoActions);

var videoTitle = document.createElement("h3");
videoTitle.id = "video-title";
videoSummarryWrapper.appendChild(videoActions);
videoSummarryWrapper.appendChild(videoTitle);
var videoDescription = document.createElement("p");
videoDescription.id = "video-description";
videoSummarryWrapper.appendChild(videoDescription);
playerWrapper.appendChild(videoSummarryWrapper);
playerSection.appendChild(playerWrapper);
playerSection.appendChild(playlistWrapper);
mainContainer.appendChild(playerSection);
$(document).ready(function() {
    var xhttp12 = new XMLHttpRequest();
    xhttp12.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var videoPlaySectionData = JSON.parse(xhttp12.responseText);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var playlistDataApi = JSON.parse(xhttp.responseText);
                    for (var i = 0; i < playlistDataApi.length; i++) {
                        playlistWrapper.appendChild(createPlaylistCard(playlistDataApi[i]));
                    }

                    function playerSectionRendering(data, cardID) {
                        var videoIFrame = document.getElementById("video-player");
                        videoIFrame.src = "https://player.vimeo.com/video/" + data.vimeoId;
                        viewCountSpan.innerHTML = data.views;
                        videoTitle.innerHTML = data.title;
                        videoDescription.innerHTML = data.description;
                        var activeCard = document.getElementById(cardID);
                        activeCard.className = "playlist-card " + "active-card";
                    }

                    function createPlaylistCard(obj) {
                        var mainDiv = document.createElement("div");
                        mainDiv.id = "card" + obj.id;
                        mainDiv.className = "playlist-card";

                        var thumbnail = document.createElement("img");
                        thumbnail.src = obj.thumbnail;
                        thumbnail.className = "thumbnail";

                        var title = document.createElement("h3");
                        title.className = "video-card-title";
                        title.innerHTML = obj.title;

                        mainDiv.appendChild(thumbnail);
                        mainDiv.appendChild(title);
                        thumbnail.id = obj.id;
                        mainDiv.addEventListener("click", function(e) {
                            var ret = e.currentTarget.id.replace("card", "");
                            ret = ret - 1;
                            var cardID = e.currentTarget.id;
                            var prevCard = document.getElementsByClassName("active-card");
                            prevCard[0].className = prevCard[0].className.replace(
                                "active-card",
                                ""
                            );
                            playerSectionRendering(videoPlaySectionData[ret], cardID);
                        });
                        return mainDiv;
                    }

                    playerSectionRendering(videoPlaySectionData[0], "card1");
                }
            };
            xhttp.open(
                "GET",
                "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",
                true
            );
            xhttp.send();
        }
    };
    xhttp12.open(
        "GET",
        "https://5d76bf96515d1a0014085cf9.mockapi.io/video",
        true
    );
    xhttp12.send();
});