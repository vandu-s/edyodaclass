var keyCodeDisplayBox = document.getElementById('keycode_display');
var keyName = document.getElementById('key_name');
var keyLocation = document.getElementById('key_location');
var keyWhich = document.getElementById('key_which');
var keyCode = document.getElementById('key_code');

document.onkeydown = function(e) {
    keyCodeDisplayBox.innerHTML = e.which;
    keyName.innerHTML = e.key;
    keyLocation.innerHTML = e.location;
    keyWhich.innerHTML = e.which;
    keyCode.innerHTML = e.code;

}

document.onkeyup = function(e) {
    console.log(e.key);
}