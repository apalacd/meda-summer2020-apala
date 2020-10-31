$(document).ready(function() {

     //Select all the paragraph elements in index.html
    var allParagraphs = $("p");  

    var textButton = $("#textButton");

    //$("p").css();

    //call back function upon click
    textButton.click( function () {
        
        var color = randomColorGenerator();
        console.log(color);
            
 //     $(#someDiv).html("<p>"+ color + "</p>");

        $(#someDiv).append("<p>"+ color + "</p>");

    allParagraphs.css("font-size", random255() + px);

    allParagraphs.css("color", color);

});

    $("#emptyButton").click( function () {
        $("#someDiv").empty();
        $("#someDiv p:last-child").remove()

    })

})