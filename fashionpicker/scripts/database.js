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
