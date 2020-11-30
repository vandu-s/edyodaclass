card1 = document.getElementById('card1');
card2 = document.getElementById('card2');
card3 = document.getElementById('card3');
card4 = document.getElementById('card4');
card5 = document.getElementById('card5');
card6 = document.getElementById('card6');


card1.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/190062231";
    document.getElementById('views-count').innerHTML = "22.5k";
    document.getElementById('video-title').innerHTML = "Croissants | Flour and Stone";
    document.getElementById('video-description').innerHTML = "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.";
    card1.className = "playlist-card active-card";
    card2.className = "playlist-card";
    card3.className = "playlist-card";
    card4.className = "playlist-card";
    card5.className = "playlist-card";
    card6.className = "playlist-card";
}

card2.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/192650599";
    document.getElementById('views-count').innerHTML = "22.2k";
    document.getElementById('video-title').innerHTML = "Perfect Mashed Potatoes and Gravy";
    document.getElementById('video-description').innerHTML = "Get the recipe for potatoes at http://bit.ly/mashedpotatoesandgravy.";
    card1.className = "playlist-card";
    card2.className = "playlist-card active-card";
    card3.className = "playlist-card";
    card4.className = "playlist-card";
    card5.className = "playlist-card";
    card6.className = "playlist-card";
}

card3.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/192834629";
    document.getElementById('views-count').innerHTML = "6297.8k";
    document.getElementById('video-title').innerHTML = "The Heart of Soba";
    document.getElementById('video-description').innerHTML = "Binge more: MOONCAKE: THE LOST ART - foodtalkies.com/mooncake THE GIFT OF MOCHI - foodtalkies.com/mochi NIRVANA - foodtalkies.com/nirvana EARTH - foodtalkies.com/earth Special thanks to: Mutsuko Soma & Tiffany Ran. Direction, Cinematography & Edit: Andrew Gooi - andrewgooi.com Seattle-based chef and soba artisan, Mutsuko Soma, of Kamonegi / kamonegiseattle.com / shares the craft behind these amazing buckwheat noodles.";
    card1.className = "playlist-card";
    card2.className = "playlist-card";
    card3.className = "playlist-card active-card";
    card4.className = "playlist-card";
    card5.className = "playlist-card";
    card6.className = "playlist-card";
}

card4.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/166409731";
    document.getElementById('views-count').innerHTML = "38.6k";
    document.getElementById('video-title').innerHTML = "Grilled Cheese 9 Ways";
    document.getElementById('video-description').innerHTML = "The best grilled cheese sandwich recipes clubbed into one video. Cheers!!";
    card1.className = "playlist-card";
    card2.className = "playlist-card";
    card3.className = "playlist-card";
    card4.className = "playlist-card active-card";
    card5.className = "playlist-card";
    card6.className = "playlist-card";
}

card5.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/191626548";
    document.getElementById('views-count').innerHTML = "998.1k";
    document.getElementById('video-title').innerHTML = "Pineapple Cheesecake";
    document.getElementById('video-description').innerHTML = "Pineapple Cheesecake: 150g butter snap cookies; 90g butter, melted; 2 packs cream cheese, room temperature; 3/4 cup sugar; 1/2 tsp vanilla extract; 4 eggs; 4 slices canned pineapple (drained first); Preheat oven at 320°F. Lightly grease mini muffin pans with melted butter, then line each recess with strips of wax paper (1in wide x 3in long), crossing at base. Pulse cookies in a food processor until finely crumbled, then add melted butter to combine. Divide mixture into muffin pans and press firmly into bases. Prepare filling by mixing cream cheese, sugar and vanilla extract with an electric mixer. Add eggs, one at a time, beating well after each addition. Pulse sliced pineapple in a food processor into pulp and add to cream cheese mixture. Divide filling into muffin pans and bake 25-30 minutes until just firm. Cool slightly, then chill for at least 2 hours. Serving suggestion: Pipe some whipped cream over the cheesecake and top with a small slice of pineapple that's been dipped in Li-hing powder. Garnish with mint leaves.";
    card1.className = "playlist-card";
    card2.className = "playlist-card";
    card3.className = "playlist-card";
    card4.className = "playlist-card";
    card5.className = "playlist-card active-card";
    card6.className = "playlist-card";
}

card6.onclick = function() {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "https://player.vimeo.com/video/140657270";
    document.getElementById('views-count').innerHTML = "302.1k";
    document.getElementById('video-title').innerHTML = "Lemony Chicken Noodle Soup";
    document.getElementById('video-description').innerHTML = "blog.moonberry.com/recipe-lemony-chicken-noodle-soup/";
    card1.className = "playlist-card";
    card2.className = "playlist-card";
    card3.className = "playlist-card";
    card4.className = "playlist-card";
    card5.className = "playlist-card";
    card6.className = "playlist-card active-card";
}