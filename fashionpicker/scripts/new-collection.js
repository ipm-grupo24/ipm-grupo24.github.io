$(document).ready(function(){
    loadPicks();
});

var tmp;
var choosen = [];

function loadPicks() {
    var picks = JSON.parse(sessionStorage.getItem("designPicks"));

    if(!picks.length == 0) {
        for(var counter = 0; counter < picks.length; counter++) {
            var picture = document.createElement("img");

            picture.className = "image-area";
            picture.src = "./database/" + picks[counter] + ".jpg";
            picture.style.height = "200px";
            picture.style.width = "200px";
            picture.id = picks[counter];
            picture.draggable = true;
            picture.addEventListener("dragstart", function(e){
                e.dataTransfer.setData("text", e.target.id);
                tmp = this.id;
            });

            $("#user-picks").append(picture);
        }
    } else {
        var container = document.createElement("div");
        var error = document.createElement("p");

        error.innerHTML = "Oops... You don't have any designs picked yet!"
        container.appendChild(error);
        $("#user-picks").append(container);
    }
}

function allowDrop(e) { e.preventDefault(); }

function dropChoose(e) {
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    if((e.target.tagName === "IMG") === false)
        e.target.appendChild(document.getElementById(data));
    else
        $(e.target).parent().append(document.getElementById(data));

    if(choosen.includes(tmp) === false) choosen.push(tmp);
}

function dropUnchoose(e) {
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    if((e.target.tagName === "IMG") === false)
        e.target.appendChild(document.getElementById(data));
    else
        $(e.target).parent().append(document.getElementById(data));

    if(choosen.includes(tmp) === true) {
        const index = choosen.indexOf(tmp);
        if(index > -1) choosen.splice(index, 1);
    }
}

function submitCollection() {
    sessionStorage.setItem("uploadedCollection", true);
    
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your collection has been submited',
        showConfirmButton: false,
        timer: 1500
      }).then(function() {
          goToUserArea();
      });
}
