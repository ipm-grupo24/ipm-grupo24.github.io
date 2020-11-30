$(document).ready(function(){
    $("#username").text(sessionStorage.getItem("username"));
    $("#bio").text(sessionStorage.getItem("bio"));

    $(".my-created-designs p").addClass("active-profile-setting");
});

function showDesigns() {
    $("#user-designs").show();
    $("#user-list-designs").hide();
    $("#user-collections").hide();
    $("#user-list-collections").hide();
}

function showDesignPicks() {
    $("#user-designs").hide()
    $("#user-list-designs").show();
    $("#user-collections").hide();
    $("#user-list-collections").hide();

    var picks = sessionStorage.getItem("designPicks");
    
    if(!picks.length == 0) {
        for(var counter = 0; counter < picks.length; counter++) {
            var container = document.createElement("div");
            var picture = document.createElement("img");
            var button = document.createElement("button");

            container.className = "area-post";
            picture.className = "image-feed";
            picture.src = "./database/" + (counter+1) + ".jpg";
            picture.style.height = "200px";
            picture.style.width = "200px";
            picture.id = (counter+1);
            picture.addEventListener("click", function() {popDesign(this.id)});
            button.className = "area-button";
            button.innerHTML = "remove";
            button.id = counter;
            button.addEventListener("click", function() {removeDesign(this.id)});

            container.appendChild(picture);
            container.appendChild(button);
            $("#user-list-designs").append(container);
        }
    } else { } // TODO write no picks
}

function showCollections() {
    $("#user-designs").hide();
    $("#user-list-designs").hide();
    $("#user-collections").show();
    $("#user-list-collections").hide();
}

function showCollectionPicks() {
    $("#user-designs").hide();
    $("#user-list-designs").hide();
    $("#user-collections").hide();
    $("#user-list-collections").show();

    var picks = sessionStorage.getItem("collectionsPicks");
    
    if(!picks.length == 0) {

    } else { } // TODO write no picks
}

function removeDesign() {
    // TODO

    location.reload();
}

function removeCollection() {
     // TODO
     
    location.reload();
}
