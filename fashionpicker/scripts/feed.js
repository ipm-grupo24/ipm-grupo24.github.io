$(document).ready(function(){
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

var pickNum = [
    378, 205, 161, 87, 142, 97, 6, 394, 43, 37, 251,
    273, 420, 5, 15, 154, 297, 228, 100, 37, 46, 165,
    12, 68, 72, 141, 27, 3, 201, 322, 300, 417, 164,
    264, 138, 49, 46, 55, 99, 348, 306, 187, 503, 218,
    28, 32, 160, 169, 326, 194, 256, 198, 95, 180, 9,
    27, 415, 371, 310, 249, 29, 122, 100, 499, 378, 249,
    208, 105, 117, 488, 38, 399, 67, 209, 198, 240, 170,
    80, 111, 156, 38, 49, 102, 200, 99, 307, 3, 9
];

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
    $("#designs").removeClass("active-tab");
}

function showTopPicks() {
    $("#feed-designs").hide();
    $("#feed-topPicks").show();
    $("#feed-collections").hide();
    $("#designs").removeClass("active-tab");
    $("#topPicks").addClass("active-tab");
    $("#designs").removeClass("active-tab");
}

function showCollections() {
    $("#feed-designs").hide();
    $("#feed-topPicks").hide();
    $("#feed-collections").show();
    $("#collections").addClass("active-tab");
    $("#designs").removeClass("active-tab");
    $("#topPicks").removeClass("active-tab");
    $("#designs").addClass("active-tab");
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