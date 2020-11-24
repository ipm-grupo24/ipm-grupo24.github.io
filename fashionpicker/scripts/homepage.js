var username, email, password;

function getStarted() {
  $("#getStarted").hide();
  $("#afterStarted").show();
}

function login() {
  $("#afterStarted").hide();
  $("#login").show();
}

function register() {
  $("#afterStarted").hide();
  $("#register").show();
}

function doLogin(event, e, p) {
  event.preventDefault();

  if(email == e && password == p) {
    swal("Welcome!", "You logged in successfuly!", "success");
    $("#login").hide();
    window.location = "./feed.html";
  }
  else swal("Oops!", "Your login failed, please try again.", "error");
}

function doRegister(event, n, e, p) {
  event.preventDefault();

  username = n;
  email = e;
  password = p;

  swal("Welcome, " + username + "!", "Your Fashion Picker account was created successfully.", "success");
  $("#register").hide();
  $("#afterStarted").show();
}
