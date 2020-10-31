$(document).ready(function() {

  $("#activate").click( function () {
       console.log("Hello!");

       var namesSubmission = $("#contestants").val();  //Pulls values that come from the typed in html box

       //console.log(namesSubmission);

       var contestants = namesSubmission.split(",");

       console.log(contestants);

       var winner = Math.random() * contestants.length;
       
       var winnerIndex = Math.floor(winner);

       console.log(winnerIndex);

       var winnerName = contestants[winnerIndex];

       console.log(winnerName);

       $(#WinnerBox).html("<p>" + winnerName + "</p>"));


    

  });

});