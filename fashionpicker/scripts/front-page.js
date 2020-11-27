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
    
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("bio", "");
    sessionStorage.setItem("designs", JSON.stringify([]));
    sessionStorage.setItem("collections", JSON.stringify([]));
    // <-- if need to store more stuff about the user aka "database" in memory

    $("#login").hide();
    goToFeed();
  } else swal("Oops!", "Your login failed, please try again.", "error");
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
