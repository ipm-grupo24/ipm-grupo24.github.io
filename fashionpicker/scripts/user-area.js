$(document).ready(function(){
    $("#username").text(sessionStorage.getItem("username"));
    $("#bio").text(sessionStorage.getItem("bio"));

    $(".my-created-designs p").addClass("active-profile-setting");

    var btn = $("#button");

    $(window).scroll(function() {
        if($(window).scrollTop() > 300) btn.addClass('show');
        else btn.removeClass('show');
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
});

function showDesigns() {
    $("#user-designs").show();
    $(".my-created-designs").addClass("active-user-tab");
    $("#user-list-designs").hide();
    $(".my-design-picks").removeClass("active-user-tab");
    $("#user-collections").hide();
    $(".my-created-collections").removeClass("active-user-tab");
    $("#user-list-collections").hide();
    $(".my-collection-picks").removeClass("active-user-tab");
}

function showDesignPicks() {
    $("#user-designs").hide()
    $(".my-created-designs").removeClass("active-user-tab");
    $("#user-list-designs").show();
    $(".my-design-picks").addClass("active-user-tab");
    $("#user-collections").hide();
    $(".my-created-collections").removeClass("active-user-tab");
    $("#user-list-collections").hide();
    $(".my-collection-picks").removeClass("active-user-tab");
    $("#user-list-designs").html("");

    var picks = JSON.parse(sessionStorage.getItem("designPicks"));

    if(!picks.length == 0) {
        for(var counter = 0; counter < picks.length; counter++) {
            var container = document.createElement("div");
            var picture = document.createElement("img");
            var button = document.createElement("i");

            container.className = "area-post";
            picture.className = "image-area";
            picture.src = "./database/" + picks[counter] + ".jpg";
            picture.style.height = "200px";
            picture.style.width = "200px";
            picture.id = picks[counter];
            picture.addEventListener("click", function() {popDesign(this.id)});
            button.className = "fa fa-times";
            button.id = counter;
            button.addEventListener("click", function() {removeDesign(this.id)});

            container.appendChild(picture);
            container.appendChild(button);
            $("#user-list-designs").append(container);
        }
    } else {
        var container = document.createElement("div");
        var error = document.createElement("p");

        error.innerHTML = "Oops... You don't have any designs picked yet!"
        container.appendChild(error);
        $("#user-list-designs").append(container);
    }
}

function showCollections() {
    $("#user-designs").hide();
    $(".my-created-designs").removeClass("active-user-tab");
    $("#user-list-designs").hide();
    $(".my-design-picks").removeClass("active-user-tab");
    $("#user-collections").show();
    $(".my-created-collections").addClass("active-user-tab");
    $("#user-list-collections").hide();
    $(".my-collection-picks").removeClass("active-user-tab");
}

function showCollectionPicks() {
    $("#user-designs").hide();
    $(".my-created-designs").removeClass("active-user-tab");
    $("#user-list-designs").hide();
    $(".my-design-picks").removeClass("active-user-tab");
    $("#user-collections").hide();
    $(".my-created-collections").removeClass("active-user-tab");
    $("#user-list-collections").show();
    $(".my-collection-picks").addClass("active-user-tab");
    $("#user-list-collections").html("");

    var picks = JSON.parse(sessionStorage.getItem("collectionsPicks"));

    if(!picks.length == 0) {
        for(var i = 0; i < picks.length; i++) {
            var container = document.createElement("div");
            var preview = document.createElement("img");
            var button = document.createElement("i");
    
            container.className = "area-post";
            preview.className = "image-area";
            preview.src = "./database/" + collections[picks[i]][0] + ".jpg";
            preview.style.height = "200px";
            preview.style.width = "200px";
            preview.id = picks[i];
            preview.addEventListener("click", function() {popCollection(this.id)});
            button.className = "fa fa-times";
            button.id = i;
            button.addEventListener("click", function() {removeCollection(this.id)});
    
            container.appendChild(preview);
            container.appendChild(button);
            $("#user-list-collections").append(container);
        }
    } else {
        var container = document.createElement("div");
        var error = document.createElement("p");

        error.innerHTML = "Oops... You don't have any collections picked yet!"
        container.appendChild(error);
        $("#user-list-collections").append(container);
    }
}

function removeDesign(id) {
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, unpick this design.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Unpicked!',
            '',
            'success'
          )

          var picks = JSON.parse(sessionStorage.getItem("designPicks"));

          picks.splice(id, 1);
          sessionStorage.setItem("designPicks", JSON.stringify(picks));
          showDesignPicks();
        }
      })
}

function removeCollection(id) {
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, unpick this collection.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Unpicked!',
            '',
            'success'
          )

          var picks = JSON.parse(sessionStorage.getItem("collectionsPicks"));

          picks.splice(id, 1);
          sessionStorage.setItem("collectionsPicks", JSON.stringify(picks));
          showCollectionPicks();
        }
      })
}
