$(document).ready(function(){
    for(var counter = 1; counter <= 88; counter++) {

        
        var picture = document.createElement("img");

        picture.className = "image-feed";
        picture.src = "./database/" + counter + ".jpg";
        picture.style.height = "200px";
        picture.style.width = "200px";
        $(".feed-designs").append(picture);
    }
});

function loadMyPage() {
    window.location = "./user-area.html";
}

function loadSettings() {
    console.log("Still not implemented..");
}
