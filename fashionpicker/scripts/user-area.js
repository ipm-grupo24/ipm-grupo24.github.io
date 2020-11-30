$(document).ready(function(){
    $("#username").text(sessionStorage.getItem("username"));
    $("#bio").text(sessionStorage.getItem("bio"));

    $(".my-created-designs p").addClass("active-profile-setting");
});
