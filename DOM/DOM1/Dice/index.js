document.addEventListener("DOMContentLoaded", () => {
    
    let randomNumber1 = Math.random();
    let result = Math.floor(randomNumber1 * 6) + 1;
    console.log(`Player 1: ${result}`);

    let randomNumber2 = Math.random();
    let result2 = Math.floor(randomNumber2 * 6) + 1;
    console.log(`Player 2: ${result2}`);

  
    const updateDiceImages = (result, result2) => {
        const changeImage1 = document.getElementById("player1");
        const changeImage2 = document.getElementById("player2");
        
        changeImage1.src = `./images/dice${result}.png`;
        changeImage2.src = `./images/dice${result2}.png`;
    };


    const updateH1 = (result, result2) => {
        const h1 = document.querySelector("h1");
        if (result > result2) {
            h1.innerHTML = "Player 1 Wins 🎖";
        } else if (result < result2) {
            h1.innerHTML = "Player 2 Wins 🎖";
        } else {
            h1.innerHTML = "It's a Draw 🎲";
        }
    };


    updateDiceImages(result, result2);
    updateH1(result, result2);
});
