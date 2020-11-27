$(document).ready(function(){
    $("#username").attr("placeholder", sessionStorage.getItem("username"));
    $("#oldEmail").attr("placeholder", sessionStorage.getItem("email"));
    $("#bio").attr("placeholder", sessionStorage.getItem("bio"));
});