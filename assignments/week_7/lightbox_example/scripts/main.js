$(document).ready(function () {

    $("#close-lightbox").click(function () {
     $("#lightbox").css("display", "none");

     $("#close-lightbox").next().remove(); 
    
    });

    $(".gallery-images").click(function () {

        
//        console.log("clicked!");

        $("#lightbox").css("display", "block");

        var thumbnailName = $(this).attr("src");

        var originalName = getOriginal(thumbnailName);

        $(#imageBox").append("<img src='" + originalName'))

 //       $("imageBox").html("<img src='images/leaves.jpg' alt='A collection of dark green leaves.'/>");

 // "leaves-tn.jpg" => "leaves.jpg"

    var string = "leaves-tn.jpg";

    var stringArray = string.split("");
    
    stringArray.pop();
    stringArray.pop();
    stringArray.pop();
    stringArray.pop();
    stringArray.pop();
    stringArray.pop();
    stringArray.pop();

    var modifiedString = stingArray.join("");
    var finishedString = modifiedString + """)






        $("imageBox").append("<img src='images/leaves.jpg' alt='A collection of dark green leaves.'/>");

    });

});









/* Examples of adding index and values 
var imageNames = ["plants.jpg", "trucks.jpg"];

var imageNames = ["a bunch of plants", "big red truck"];

var firstPart = ["<img src='images/"];

var lastPart = "' />"

*/