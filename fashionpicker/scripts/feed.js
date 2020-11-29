$(document).ready(function(){
    loadDesignsTab();
    loadTopPicksTab();
    loadCollectionsTab();
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

var col1 = [15, 16, 17];
var col2 = [18, 19];
var col3 = [20, 21];
var col4 = [22, 58, 59];
var col5 = [30, 31];
var col6 = [36, 37, 38];
var col7 = [45, 46];
var col8 = [50, 51, 52, 53];
var col9 = [66, 67, 68];
var col10 = [73, 74, 75, 76, 77, 78];
var col11 = [79, 80];
var col12 = [81, 82, 83];

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
    var top = [1, 23, 15, 50, 44, 78, 4, 88, 70, 82];

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
        text: "",
        confirmButtonText: "Close",
        imageUrl: "./database/" + id + ".jpg",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Design ' + id,
        html: "<p>Comments:</br> ... </br></p>"
      })
}

function pickDesign(id) {
    console.log("PICK DESIGN WITH ID: " + id);
}