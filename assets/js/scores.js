const username = document.getElementById ('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScoresList = document.getElementById("highScoresList");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const max_high_scores = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener ('keyup', () =>{
    saveScoreButton = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,

    };
    highScores.push(score)
    highScores.sort ( (a,b) => b.score-a.score);
    highScores.splice (5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");