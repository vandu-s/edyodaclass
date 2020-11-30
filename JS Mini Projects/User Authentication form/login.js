 var loginForm = document.getElementById('login-form');
 var loader = document.getElementById('loader');
 var loginMenu = document.getElementById('login_menu');

 var loginOutMenu = document.getElementById('logout_menu');



 loginForm.onsubmit = function(e) {
     e.preventDefault();

     var data = {
         username: this.username.value,
         password: this.password.value

     }
     window.localStorage.setItem('username', this.username.value);
     window.localStorage.setItem('password', this.password.value);

     //  var http = new XMLHttpRequest();
     //  http.open('post', 'https://5d76bf96515d1a0014085cf9.mockapi.io/login', true);
     //  http.setRequestHeader("content-Type", "application/json;charset=UTF-8");
     //  http.onreadystatechange = function() {
     //      if (this.readyState === 3) {
     //          loader.style.display = 'block';
     //      }

     //      if (this.readyState === 4) {
     //          //  setTimeout(() => {

     //          //  }, 1000)
     //          loader.style.display = 'none';
     //          alert('Login Successful!!');
     //          location.replace('./index.html');
     //          loginOutMenu.style.display = 'block';
     //          loginMenu.style.display = 'none';

     //      }
     //  http.send(JSON.stringify(data));
     $.post('https://5d76bf96515d1a0014085cf9.mockapi.io/login', data, function() {
         alert('login sucessfull');
     })

 }