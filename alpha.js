// function play() {
//     //step-1: hidden the home screen. to hide home screen add the class hidden to the home section

//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//    // console.log(homeScreen);
//     //step-2: Show the playground 
//     const playground =document.getElementById("play-ground");
//     playground.classList.remove("hidden");
//     // playground.classList.add("shown")
//     console.log(playground);
// }
function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;
    //console.log('Player Pressed' , playerPressed);
    if(playerPressed ==='Escaped'){
        gameOver();
    }

    // get the expected to press keyboard
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet= currentAlphabetElement.innerText;
    const expectedAlphabet= currentAlphabet.toLowerCase();
   // console.log('Current alphabet', currentAlphabet);
   //console.log(playerPressed, expectedAlphabet);


   //checked matched or not

   if(playerPressed === expectedAlphabet){
   // console.log('You got a point');
   const currentScore = getTextElementValueById('current-score');
   const updatedScore = currentScore + 1;
   setTextElementValueById('current-score', updatedScore);



   //-------------------------------------------------------
    //update score
    //1. get the current value of score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log("score",currentScore)
    // //2. increase the score by 1

    // const newScore = currentScore + 1;
    // //3.show the updated score
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet)
    continueGame()
   }else{
    //console.log('You missed, You lost a life');
    const currentScore = getTextElementValueById('current-life');
    const updatedScore = currentScore - 1;
    setTextElementValueById('current-life', updatedScore)
    if(updatedScore === 0){
        gameOver();
    }

    //1. get the current life score
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // //2, decrease the value of life
    // const newLifeScore = currentLife - 1;

    // // show the updated life
    // currentLifeElement.innerText = newLifeScore;
   }
}
document.addEventListener('keyup',handleKeyBoardButtonPress);

function continueGame() {

    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log('your random alphabet is ', alphabet);
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);


}

function play() {
    hideElement('home-screen');
    hideElement('final-score');
    shownElement('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElement('play-ground');
    shownElement('final-score');
    //1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet)
    //console.log('currentAlphabet',currentAlphabet)
}