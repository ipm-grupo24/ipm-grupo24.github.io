$(document).ready(function(){
    loadDesignsTab();
    loadTopPicksTab();
    loadCollectionsTab();

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

function loadDesignsTab() {
    for(var counter = 1; counter <= 88; counter++) {   
        var container = document.createElement("div");
        var username = document.createElement("p");
        var picture = document.createElement("img");
        var button = document.createElement("button");

        container.className = "feed-post";
        username.className = "feed-username";
        username.innerHTML = users[counter-1];
        picture.className = "image-feed";
        picture.src = "./database/" + counter + ".jpg";
        picture.style.height = "200px";
        picture.style.width = "200px";
        picture.id = counter;
        picture.addEventListener("click", function() {popDesign(this.id)});
        button.className = "feed-button";
        button.innerHTML = "pick";
        button.id = counter;
        button.addEventListener("click", function() {pickDesign(this.id)});

        container.appendChild(username);
        container.appendChild(picture);
        container.appendChild(button);
        $(".feed-designs").append(container);
    }
}

function loadTopPicksTab() {
    var top = [43, 64, 70, 13, 32, 57, 72, 8, 1, 58];

    for(var i = 0; i < 10; i++) {
        var container = document.createElement("div");
        var rank = document.createElement("h1");
        var username = document.createElement("p");
        var picture = document.createElement("img");
        var button = document.createElement("button");

        container.className = "feed-post";
        rank.innerHTML = "#" + (i+1);
        username.className = "feed-username";
        username.innerHTML = users[top[i]-1];
        picture.className = "image-feed";
        picture.src = "./database/" + top[i] + ".jpg";
        picture.style.height = "200px";
        picture.style.width = "200px";
        picture.id = top[i];
        picture.addEventListener("click", function() {popDesign(this.id)});
        button.className = "feed-button";
        button.innerHTML = "pick";
        button.id = top[i];
        button.addEventListener("click", function() {pickDesign(this.id)});

        container.appendChild(rank);
        container.appendChild(username);
        container.appendChild(picture);
        container.appendChild(button);
        $(".feed-topPicks").append(container);
    }
}

function loadCollectionsTab() {
    for(var i = 0; i < collections.length; i++) {
        var container = document.createElement("div");
        var name = document.createElement("p");
        var preview = document.createElement("img");
        var button = document.createElement("button");

        container.className = "feed-post";
        name.className = "feed-username";
        name.innerHTML = `Collection ${(i+1)}`;
        preview.className = "image-feed";
        preview.src = "./database/" + collections[i][0] + ".jpg";
        preview.style.height = "200px";
        preview.style.width = "200px";
        preview.id = i;
        preview.addEventListener("click", function() {popCollection(this.id)});
        button.className = "feed-button";
        button.innerHTML = "pick";
        button.id = i;
        button.addEventListener("click", function() {pickCollection(this.id)});

        container.appendChild(name);
        container.appendChild(preview);
        container.appendChild(button);
        $(".feed-collections").append(container);
    }
}

function loadMyPage() {
    window.location = "./user-area.html";
}

function loadSettings() {
    window.location = "./user-settings.html";
}

function showDesigns() {
    $("#feed-designs").show();
    $("#feed-topPicks").hide();
    $("#feed-collections").hide();

    $("#designs").addClass("active-tab");
    $("#topPicks").removeClass("active-tab");
    $("#collections").removeClass("active-tab");
}

function showTopPicks() {
    $("#feed-designs").hide();
    $("#feed-topPicks").show();
    $("#feed-collections").hide();

    $("#designs").removeClass("active-tab");
    $("#topPicks").addClass("active-tab");
    $("#collections").removeClass("active-tab");
}

function showCollections() {
    $("#feed-designs").hide();
    $("#feed-topPicks").hide();
    $("#feed-collections").show();

    $("#designs").removeClass("active-tab");
    $("#topPicks").removeClass("active-tab");
    $("#collections").addClass("active-tab");
}

function pickDesign(id) {
    var picks = JSON.parse(sessionStorage.getItem("designPicks"));

    if(!picks.includes(id)) {
        picks.push(id);
        picks.sort();
        $(`#${id}`).addClass("picked");
        sessionStorage.setItem("designPicks", JSON.stringify(picks));
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Design added to your list',
            showConfirmButton: false,
            timer: 1500
        });
    } else
        Swal.fire({
         icon: 'error',
        title: 'Oops...',
        text: 'This design is already in your list!',
        footer: '<a href="./user-area.html">Take me to my list</a>'
    })
}

function pickCollection(id) {
    var picks = JSON.parse(sessionStorage.getItem("collectionsPicks"));

    if(!picks.includes(id)) {
        picks.push(id);
        picks.sort();
        $(`#${id}`).addClass("picked");
        sessionStorage.setItem("collectionsPicks", JSON.stringify(picks));
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Collection added to your list',
            showConfirmButton: false,
            timer: 1500
        });
    } else Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This collection is already in your list!',
        footer: '<a href="./user-area.html">Go to my page</a>'
    })
}
