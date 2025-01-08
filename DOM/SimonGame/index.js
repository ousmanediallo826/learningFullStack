document.addEventListener("DOMContentLoaded", () => {
    let level = 0;
    let gameStarted = false;

    const gamePattern = [];
    const userClickedPattern = [];

    const buttonColors = ["red", "blue", "green", "yellow"];

    const playSound = (name) => {
        const audio = new Audio(`sounds/${name}.mp3`);
        audio.play();
    };

    const animatePress = (currentColor) => {
        $(`#${currentColor}`).addClass("pressed");
        setTimeout(() => {
            $(`#${currentColor}`).removeClass("pressed");
        }, 100);
    };

    const nextSequence = () => {
        level++;
        $("h1").text(`Level ${level}`);
        
        const randomNumber = Math.floor(Math.random() * 4);
        const randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        playSound(randomChosenColor);
        animatePress(randomChosenColor);

        $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    };

    const checkAnswer = (currentLevel) => {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            console.log("success");

            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextSequence();
                }, 1000);

                userClickedPattern.length = 0;
            }
        } else {
            console.log("wrong");
            startOver();
        }
    };

    const startOver = () => {
        level = 0;
        gamePattern.length = 0;
        userClickedPattern.length = 0;
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")

        }, 100);
        const gameOverSound = new Audio("./sounds/wrong.mp3")
        gameOverSound.play()
        gameStarted = false;
    };

    $(document).keydown(function () {
        if (!gameStarted) {
            gameStarted = true;
            $("h1").text(`Level ${level}`);
            nextSequence();
        }
    });

    $(".btn").on("click", function () {
        const userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);

        console.log(`User Clicked Pattern: ${JSON.stringify(userClickedPattern)}`);

        checkAnswer(userClickedPattern.length - 1);
    });
});
