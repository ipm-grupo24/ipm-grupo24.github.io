var username, password, email, bio;

$(document).ready(function() {
    username = sessionStorage.getItem("username");
    password = sessionStorage.getItem("password");
    email = sessionStorage.getItem("email");
    bio = sessionStorage.getItem("bio");

    $("#userna me").attr("placeholder", username);
    $("#email").attr("placeholder", email);
    $("#bio").attr("placeholder", bio);
});

function submitSettings(event) {
    event.preventDefault();

    // TODO
    
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
