let count = 0;
let isGameRunning = false;
let gameTime = 5;

function startGame(){
  if(!isGameRunning){
    isGameRunning = true;
    count =0;
    document.getElementById("result").textContent = "Tıklama Sayısı: 0";
    setTimeout(endGame, gameTime * 1000);
  }
}

function clickButton (){
  if(isGameRunning){
    count ++;
    document.getElementById("result").textContent = `Tıklama Sayısı: ${count}`
  }
}

function endGame(){
  isGameRunning= false;
  document.getElementById("clickButton").disabled = true;
  document.getElementById('result').textContent = `Oyun bitti . Tıklama Sayınız: ${count}`
}

startGame();