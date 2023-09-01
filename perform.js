const setOfWords=["The only person you have to please is yourself.",
                  "You won't find your future following someone else's roadmap.",
                  "The possibilities are endless as long as you don't limit yourself.",
                  "Set high standards for yourself and live up to your own expectations.",
                  "Surround yourself with people who inspire you to become even better.",
                  "If you listen to the naysayers, you'll never find out what you can really do.",
                  "Don't fast forward through life; you'll miss all the good stuff along the way.",
                  "Remember the past, but live for today and strive for an even better tomorrow.",
                  "The story of your life is in your hands. You alone have the power to write the next chapter.",
                  "No matter where you began or what happened along the way, you have the power to get to where you're supposed to be."];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const comapreWords = (str1,str2) =>{
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function(item,index){
    if(item == words2[index]){
      cnt++;
    }
  })
  let errorWords = (words1.length - cnt);
  return (cnt+" correct out of "+words1.length + " words and the total number of error are "+errorWords+".");
}


const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
}


const playGame = () => {
  let randomNumber = Math.floor(Math.random()*setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  btn.innerText = "Done";
  let date = new Date();
  startTime = date.getTime();
}


const endGame = () => {
  btn.innerText = "Start";
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime - startTime)/1000) // endTime and startTime fetch date in millisecond therefore we need to divide this 1000

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount/totalTime)*60);
  let finalMsg = "you typed total at speed of "+speed+" Words per minutes. ";

  finalMsg += comapreWords(msg.innerText,totalStr);
  msg.innerText = finalMsg;
}



btn.addEventListener("click",function(){
  if(this.innerText=='Start')
  {
    typeWords.disabled = false;
    playGame();
  }
  else if(this.innerText =='Done')
  {
    typeWords.disabled = true;
    endGame();
  }
});
