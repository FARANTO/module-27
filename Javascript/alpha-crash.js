function play(){
    hideElementbyId('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    // Generate Random Alphabet
    const alphabet = getARandomAlphabet();
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorbyId(alphabet);
}


// function play() {
// //   step-1: Hide the home screen. to hide the screen add the class to the home
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

// // show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// }