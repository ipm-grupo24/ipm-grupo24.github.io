var username, password, email, bio;

$(document).ready(function() {
    username = sessionStorage.getItem("username");
    password = sessionStorage.getItem("password");
    email = sessionStorage.getItem("email");
    bio = sessionStorage.getItem("bio");

    $("#username").attr("placeholder", username);
    $("#email").attr("placeholder", email);
    $("#bio").attr("placeholder", bio);
});

function submitSettings(event) {
    event.preventDefault();

    var tmp = $("#username").val();
    if(tmp !== "" && tmp !== username) sessionStorage.setItem("username", tmp);

    var tmp = $("#email").val();
    if(tmp !== "" && tmp !== email) sessionStorage.setItem("email", tmp);

    var tmp = $("#newPass").val();
    if(tmp !== "" && tmp !== password) sessionStorage.setItem("password", tmp);

    var tmp = $("#bio").val();
    if(tmp !== "" && tmp !== bio) sessionStorage.setItem("bio", tmp);
    
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your settings have been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(function() {
          history.go(-1);
          return false;
      });
}
