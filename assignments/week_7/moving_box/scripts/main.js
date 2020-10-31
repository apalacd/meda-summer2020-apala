$(document).ready(function () {

    // Buttons Start
    $("#up").click(function() {
        var currentTopPos = $("#box").css("top");
        console.log(currentTopPos);

        var topValue = parseInt(currentTopPos);
        console.log(topValue);

     //   if (topValue >= 1000) {
        if (topValue <=0) {
            return;
        }

        var newTopValue = topValue - 50;
        console.log(newTopValue);

        var cssTopValue = newTopValue + "px";
        console.log(cssTopVaue);

        $("#box").css("top", cssTopValue);

 //       console.log(topValue);
// This does not work.
 //       $("#box").css("top", newTopValue + "px");


 // Bad examples to write functions and arrays
 //       function random10(){return Math.floor(Math.random() * 10 + 1);)}
 //        var array = [948503489, 450485904, 945098405983, 90350049594, 458034850495];

    });

    $("#left").click(function () {
        var currentLeftPos = $("#box").css("left");
        console.log(currentTopPos);

        var leftValue = parseInt(currentleftPos);
     //   console.log(topValue);
        if (leftValue <=0) {
            return;
        }

        var newLeftValue = leftValue - 50;
    //    console.log(newTopValue);

        var cssLeftValue = newLeftValue + "px";
        console.log(cssLeftVaue);

        $("#box").css("left", cssLeftValue);

    });

    $("#right").click(function () {

        var currentLeftPos = $("#box").css("right");
        console.log(currentRightPos);

        var rightValue = parseInt(currentRightPos);
     //   console.log(topValue);
        if (rightValue <=0) {
            return;
        }

        var newRightValue = rightValue + 50;
    //    console.log(newTopValue);

        var cssRightValue = newRightValue + "px";
        console.log(cssRightVaue);

        $("#box").css("left", cssRightValue);

    });

        $("#down").click(function () {
            var currentDownPos = $("#box").css("down");
            console.log(currentDownPos);
    
            var downValue = parseInt(currentDownPos);
        
            if (downValue >= 1000) {
                return;
            }
    
            var newDownValue = downValue + 50;
        
    
            var cssDownValue = newDownValue + "px";
            console.log(cssDownVaue);
    
            $("#box").css("down", cssDownValue);
    });

    //Buttons End



    $(document).keydown(function (event) {
        console.log(event.which);

        // 37 key == Left Arrow
        if (event.which === 37) {
            event.preventDefault();

            var currentLeftPos = $("#box").css("left");
            var leftValue = parseInt(currentLeftPos);
            console.log(currentLeftPos);
            if (leftValue <=2) {
                return;
            }
            var newLeftValue = leftValue - 50;
            var cssLeftValue = newLeftValue + "px";
            console.log(cssLeftVaue);
    
            $("#box").css("left", cssLeftValue);
            //40 key == down Arrow
        } else if (event.which === 40) {
            event.preventDefault();
            
            var currentDownPos = $("#box").css("down");
            var downValue = parseInt(currentDownPos);
            if (downValue >= 1000) {
                return;
            }
            var newDownValue = downValue + 50;
            var cssDownValue = newDownValue + "px";
            $("#box").css("down", cssDownValue);
        } else if (event.which === 38) {
            event.preventDefault();

            var currentTopPos = $("#box").css("top");
            var topValue = parseInt(currentTopPos);
            if (topValue <= 2) {
                return;
            }
            var newTopValue = topValue - 50;
            var cssTopValue = newTopValue + "px";
            $("#box").css("top", cssTopValue);

        } else if (event.which === 39 ) {
            event.preventDefault();

            var currentLeftPos = $("#box").css("left");
            var leftValue = parseInt(currentLeftPos);
            if (leftValue <= 2) {
                return;
            }
            var newLeftValue = leftValue - 50;
            var cssLeftValue = newLeftValue + "px";
            $("#box").css("left", cssLeftValue);
        }


    });

});
