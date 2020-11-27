$(document).ready(function(){
    $("#username").text(sessionStorage.getItem("username"));
    $("#bio").text(sessionStorage.getItem("bio"));
});