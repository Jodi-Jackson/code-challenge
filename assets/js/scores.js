const username = document.getElementById ('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScoreinnterText = mostRecentScore;

username.addEventListener ('keyup', () =>{
    saveScoreButton.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};