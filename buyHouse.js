function MakeCards(Title,Location,Price,imgid) {
var obj={}

    obj.Title=Title,
    obj.Location=Location, 
    obj.Price=Price
    obj.imgid=imgid
    return obj
}
var house1=MakeCards("Prestigious apartment for sale golden triangle","Paris8","8.900.000 € EUR","img1")
var house2=MakeCards("Superb house nested in a private greenery environment","Paris XVI","10.800.000 € EUR")
var house3=MakeCards("Prosperous house","Paris 4th ","29.600.000 € EUR")
var house4=MakeCards("Beautiful duplex apartment with terraces","Paris, Ile-De-France, 75016 France","10.700.000 € EUR")
var house5=MakeCards("Elegant bright family apartment with balcony in","Paris 16th ","7.280.000 € EUR")
var house6=MakeCards("Exceptional duplex apartment","Paris 17th ","5.900.000 € EUR")

var allHouses=[house1,house2,house3,house4,house5,house6]

var images=[
    {imgSrc:"/images/im1.jpeg",imgi:"img1"},
    {imgSrc:"/images/im2.jpeg"},
    {imgSrc:"/images/im3.jpeg"},
    {imgSrc:"/images/im4.jpeg"},
    {imgSrc:"/images/im5.jpeg"},
    {imgSrc:"/images/im6.jpeg"},
]



var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}

each(images,function(e,i){
    $(".cardImg").append(`<div><img  id="img${i+1}" src="${e.imgSrc}" ><button>buy</button></div>`)
})

$(document).ready(function() {
    for (var i = 0; i < allHouses.length; i++) {
        var house = allHouses[i];
        var imgId = "img" + (i + 1);
        $("#" + imgId).parent().append("<p>" + house.Title + "</p>");
        $("#" + imgId).parent().append("<p>" + house.Location + "</p>");
        $("#" + imgId).parent().append("<p>" + house.Price + "</p>");
    }
});

// search bar 

$(".search").on("input",function(){
    var query=$(this).val()
    $(".cardImg").hide()

    for (var i = 0; i < allHouses.length; i++){
        for (var j=0;j<images.length;j++){
       if((allHouses[i].imgid===images[j].imgi)&&(allHouses[i].Title.toLowerCase().includes(query) || allHouses[i].Location.toLowerCase().includes(query))){
        console.log(allHouses[i])
      return  $(".cards").append(`<div><img  id="img${i+1}" src="${images[j].imgSrc}" ><button>buy</button></div>`)
    }
    else{
        $(".cards").hide()
        $(".cardImg").show()
    }
}
    }
   
})

///

var descriptions = [{
    description: "Paris 4th - Place des Vosges. In the heart of the Marais, just a few steps from Place des Vosges, hidden from view in a discreet cul-de-sac, come and discover behind a heavy carriage door this bourgeois residence of 523 m² spread over 5 levels and served by an elevator. It enjoys absolute tranquility, a spacious and warm interior adorned with ancient materials, wood, stone, terracotta, and the finest fabrics, as well as a paved and tree-lined courtyard of 46 m² with the charm of a countryside terrace"
},{
    description: "Located on the 6th and last floor by elevator of a luxury freestone building, superb apartment renovated by architect with an area of approximately 272sq.m. with a 43sq.m. terrace on one level. It is composed of an entrance hall, a living-dining room extended by the terrace with a view of the Eiffel Tower, a fully equipped dining kitchen with central island, 3 bedrooms with their bathrooms. On the upper floor"
},{description: "EXCLUSIVE - PARIS 16th - Magnificent, luxuriously renovated air-conditioned apartment located between Place D’Iéna and the Trocadéro. This 309 sq. m. reception apartment located on the 2nd floor by elevator in a very high standard Haussmann building with a ceiling height of 3.30m, moldings and fireplaces, offers unobstructed views of the Palais d'Iéna and the Eiffel Tower, a very beautiful light and exceptional room volumes. "
},{description: "Sole Agent - Triangle d'or - Georges V - In a beautiful building with well-maintained common areas, on the 4th floor with elevator, a superb 198 sq.m apartment, entirely renovated by architect, enjoying great views over the Eiffel tower. It features an entrance gallery, a double living room, an equipped kitchen, a dining groom, a master bedroom with dressing room and toilets, two bedrooms, a shower room with toilet, guest restrooms"
},{description: "Paris 8 - Palais de l'Élysée PALAIS DE L'ELYSEE - Exceptional air-conditioned apartment, luxuriously renovated and furnished, a stone's throw from the luxury boutiques between the Faubourg Saint-Honoré and Avenue Montaigne palaces. This 275m² reception apartment is located on the 3rd floor by elevator in a luxury Haussmann-style building, with 3.30m high ceilings and a fireplace. It boasts a view of the Eiffel Tower, and is very bright thanks to its unobstructed views over the gardens and the exceptional volumes of the rooms"
},{description: "In the heart of a secured private alley of the 16th arrondissement, a remarkable property opening onto an astonishing 500 sq.m landscaped garden. Enjoying south-east exposure, no vis-à-vis and absolute calm, the 510 sq.m main house spans three levels (400 sq.m weighted area). On the ground floor, opening onto the garden, a large dining kitchen, a dining room, a cloakroom, a large cathedral living room, a study on a mezzanine. The first floor is entirely dedicated to parental space with a 30 sq.m master bedroom with bathroom, a dressing room and a study"
}];

for (var i = 0; i < descriptions.length; i++) {
      var imgId = "img" + (i + 1) ;

       $(imgId).on("mouseover", function () {
        
        $("#" + imgId).parent().append("<div class='descri'>"+ descriptions[i].description +"</div>");
      
    });

   
    $(imgId).on("mouseout", function () {
        $(imgId).find(".descri").remove();
    });
}