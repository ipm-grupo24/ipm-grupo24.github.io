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

var users = [
    "Cloth Collage", "Fantasy Dress", "Streetwear Sam", "Concept Fashion",
    "Fantasy Dress", "Matt Wood", "Streetwear Sam", "Cottagecore",
    "Crew Cuts", "Fantasy Dress", "Streetwear Sam", "Fantasy Dress",
    "Cloth Collage", "Matt Wood", "Jewellery by Luna", "Jewellery by Luna",
    "Jewellery by Luna", "Altered Reality", "Altered Reality", "Mady Makes",
    "Mady Makes", "Ana Accessories", "Linda White", "Fantasy Dress",
    "Midori", "Helen Williams", "Cloth Collage", "Creeps",
    "Creeps", "Dance Overnight", "Dance Overnight", "Dress by Duarte",
    "Amaya", "Cottagecore", "Dress by Duarte", "Ghost Buddy",
    "Ghost Buddy", "Ghost Buddy", "Fantasy Dress", "Matt Wood",
    "Dress by Duarte", "Matt Wood", "Sarah Ainsley", "Kozi Klothes",
    "Mary B", "Mary B", "Cloth Collage", "Cloth Collage",
    "Dress by Duarte", "Outlandish", "Outlandish", "Outlandish",
    "Outlandish", "Matt Wood", "Isaac Clay", "Swell Swim",
    "Kristin", "Ana Accessories", "Ana Accessories", "Matt Wood",
    "Ivywear", "Pete does Pants", "Streetwear Sam", "Soft Pastel",
    "Soft Pastel", "Kabayashi", "Kabayashi", "Kabayashi",
    "Swell Swim", "Fantasy Dress", "Streetwear Sam", "Soft Pastel",
    "Totem Brand", "Totem Brand", "Totem Brand", "Totem Brand",
    "Totem Brand", "Totem Brand", "Solstice Wear", "Solstice Wear",
    "Graphic Tees", "Graphic Tees", "Graphic Tees", "Dress by Duarte",
    "Concept Fashion", "Cloth Collage", "Swell Swim" , "Concept Fashion"
];

var picksNumber = [
    378, 205, 161, 87, 142, 97, 6, 394, 43, 37,
    251, 273, 420, 5, 15, 154, 297, 228, 100, 37,
    46, 165, 12, 68, 72, 141, 27, 3, 201, 322,
    300, 417, 164, 264, 138, 49, 46, 55, 99, 348,
    306, 187, 503, 218, 28, 32, 160, 169, 326, 194,
    256, 198, 95, 180, 9, 27, 415, 371, 310, 249,
    29, 122, 100, 499, 364, 249, 208, 105, 117, 488,
    38, 399, 67, 209, 198, 240, 170, 80, 111, 156,
    38, 49, 102, 200, 99, 307, 3, 9
];

var collections = [
    [15, 16, 17], [18, 19], [20, 21], [22, 58, 59], [30, 31],
    [36, 37, 38], [45, 46], [50, 51, 52, 53], [66, 67, 68], [73, 74, 75, 76, 77, 78],
    [79, 80], [81, 82, 83]
];

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
        preview.src = "./database/" + collections[i][0] + ".jpg"; // TEST
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

function popDesign(id) {
    Swal.fire({
        title: users[id-1],
        text: "Picks: " + picksNumber[id],
        confirmButtonText: "Close",
        imageUrl: "./database/" + id + ".jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "Design " + id
      })
}

function popCollection(id) {
    var imgs = "";

    for(var i = 0; i < collections[id].length; i++)
        imgs = imgs + `<img src='./database/${collections[id][i]}.jpg' height=200 width=200>`;

    Swal.fire({
        title: `Collection ${id}`,
        html: imgs,
        confirmButtonText: "Close",
      })
}

function pickDesign(id) {
    console.log("PICK DESIGN WITH ID: " + id);

    // TODO
}

function pickCollection(id) {
    console.log("PICK COLLECTION WITH ID: " + id);

    // TODO
}