$(document).ready(function() {

    var cardGridWrapper = document.getElementById('container');
    var loginCheckBox = document.getElementById('login_check')
        // console.log(loginCheckBox.checked);

    // console.log(cardGridWrapper);

    function generateVideoCard(data) {


        var cardLink = document.createElement('a');
        cardLink.className = 'card_link';
        if (loginCheckBox.checked === true) {
            // console.log(loginCheckBox.checked);
            cardLink.href = './player.html?id=' + data.id;
        } else {
            cardLink.href = './login.html'

        }
        // console.log(cardLink);

        var card = document.createElement('div');
        card.className = 'card';
        card.id = data.id;

        var thumbnail = document.createElement('img');
        thumbnail.src = data.thumbnail;
        card.alt = data.title;
        thumbnail.className = 'img-grid thumbnail';
        card.appendChild(thumbnail);
        var title = document.createElement('div');
        title.className = 'text';
        card.appendChild(title);
        title.innerHTML = data.title;
        cardLink.appendChild(card);

        cardGridWrapper.appendChild(cardLink);
        return cardLink;

    }

    var videoDataArr = [];

    function renderCardGrid() {
        for (i = 0; i < videoDataArr.length; i++) {
            generateVideoCard(videoDataArr[i]);

        }
    }

    // xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", true);
    // xhttp.onreadystatechange = function() {
    //     if (xhttp.readyState === 4) {
    //         videoDataArr = JSON.parse(xhttp.responseText);
    //         // console.log(videoDataArr);
    //         renderCardGrid();
    //         // console.log($('.card'));

    //     }

    // }
    // xhttp.send();
    // $('<p>').text('video  para');
    // $('#container').prepend($('<p>').text('video  para'));
    // $('#container').append($('<p>').text('video  para'));

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(response) {
        console.log(response);
        videoDataArr = response;
        renderCardGrid();
    }).fail(function(err) {
        switch (err.status) {
            case 404:
                alert('GOTO 404 page');
                break;
            case 500:
                alert('GOTO 500 page');
                break;

        }
        console.log(JSON.stringify(err))
    });


});

// loginCheckBox.onChange = function() {
//     cardGridWrapper.innerHTML = '';
//     renderCardGrid();

// }