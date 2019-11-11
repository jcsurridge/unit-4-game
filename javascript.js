$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomNumber = [Math.floor((Math.random() * 101) + 19)];

    $("#goalscore").text("Number to guess: " + randomNumber);

    var crystalValue1 = [Math.floor((Math.random() * 11) + 1)];
    var crystalValue2 = [Math.floor((Math.random() * 11) + 1)];
    var crystalValue3 = [Math.floor((Math.random() * 11) + 1)];
    var crystalValue4 = [Math.floor((Math.random() * 11) + 1)];

    console.log(randomNumber);
    console.log(crystalValue1, crystalValue2, crystalValue3, crystalValue4)


    //reset game 

    function resetGame() {
        randomNumber = Math.floor((Math.random() * 101) + 19);
        crystalValue1 = Math.floor((Math.random() * 11) + 1);
        crystalValue2 = Math.floor((Math.random() * 11) + 1);
        crystalValue3 = Math.floor((Math.random() * 11) + 1);
        crystalValue4 = Math.floor((Math.random() * 11) + 1);
        $("#goalscore").text("Number to guess: " + randomNumber);
        score = 0;
    };


    // click events

    $("#blueCrystal").on("click", function () {
        score += parseInt(crystalValue1);
        // alert("This click works!");
        console.log(score);
        winorlose();
    });

    $("#greenCrystal").on("click", function () {
        score += parseInt(crystalValue2);
        // alert("This click works!");
        console.log(score);
        winorlose();
    });


    $("#yellowCrystal").on("click", function () {
        score += parseInt(crystalValue3);
        // alert("This click works!");
        console.log(score);
        winorlose();
    });

    $("#redCrystal").on("click", function () {
        score += parseInt(crystalValue4);
        // alert("This click works!");
        console.log(score);
        winorlose();

    });

    function winorlose() {

        if (score === randomNumber) {
            wins++;
            alert("You win!");
            resetGame();
        };

        if (score > randomNumber) {
            losses++;
            alert("You lose!");
            resetGame();
        };

        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#score").text("Your Score: " + score);
    };






});