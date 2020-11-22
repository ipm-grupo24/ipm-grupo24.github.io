var email, password;

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
    swal("welcome!", "You logged in successfuly!", "success");
    $("#login").hide();
  }
  else swal("Oups!", "Your login failed, please try again", "error");
}

function doRegister(event, e, p) {
  event.preventDefault();

  email = e;
  password = p;

  swal("Congratulations!", "You Fashion Picker account was successfully created!", "success");
  $("#register").hide();
  $("#afterStarted").show();
}
