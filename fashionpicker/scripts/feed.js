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
    window.location = "./user-settings.html";
}

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
