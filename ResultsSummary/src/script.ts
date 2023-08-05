let btnContinue = document.querySelector('#btn-continue')!;
btnContinue.addEventListener('click', Continue);

function Continue() {
    const reactionScore = document.querySelector("#reaction-score")!;
    const memoryScore = document.querySelector("#memory-score")!;
    const verbalScore = document.querySelector("#verbal-score")!;
    const visualScore = document.querySelector("#visual-score")!;
    
    reactionScore.innerHTML = Math.floor(Math.random() * 101).toString();
    memoryScore.innerHTML = Math.floor(Math.random() * 101).toString();
    verbalScore.innerHTML = Math.floor(Math.random() * 101).toString();
    visualScore.innerHTML = Math.floor(Math.random() * 101).toString();    

    const reactionScoreBar = document.getElementById("reaction-score-bar")!;
    const memoryScoreBar = document.getElementById("memory-score-bar")!;
    const verbalScoreBar = document.getElementById("verbal-score-bar")!;
    const visualScoreBar = document.getElementById("visual-score-bar")!;

    reactionScoreBar.style.width = reactionScore.innerHTML + "%";
    memoryScoreBar.style.width = memoryScore.innerHTML + "%";
    verbalScoreBar.style.width = verbalScore.innerHTML + "%";
    visualScoreBar.style.width = visualScore.innerHTML + "%";    

    let score: string[] = [reactionScore.innerHTML, memoryScore.innerHTML, verbalScore.innerHTML, visualScore.innerHTML];
    let media: number = 0;

    for(let i = 0; i < score.length; i++){
        media += parseInt(score[i]);
    }

    let percent = document.querySelector("#percent")!;
    percent.innerHTML = Math.floor(media/4).toString();

    let scoreAnalysis = document.querySelector("#score-analysis")!;
    let scoreText = document.querySelector("#score-text")!;
    if(parseInt(percent.innerHTML) < 25){
        scoreAnalysis.innerHTML = "Bad";
        scoreText.innerHTML = "Your scored higher than 20% of the people who have taken this test";
    } else if (parseInt(percent.innerHTML) < 50){
        scoreAnalysis.innerHTML = "Good";
        scoreText.innerHTML = "Your scored higher than 45% of the people who have taken this test";
    } else if (parseInt(percent.innerHTML) < 75){
        scoreAnalysis.innerHTML = "Great";
        scoreText.innerHTML = "Your scored higher than 65% of the people who have taken this test";
    } else {
        scoreAnalysis.innerHTML = "Awesome";
        scoreText.innerHTML = "Your scored higher than 80% of the people who have taken this test";
    }
}