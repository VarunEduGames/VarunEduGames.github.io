document.addEventListener("DOMContentLoaded",()=>{

const startScreen=document.getElementById("startScreen");
const gameScreen=document.getElementById("gameScreen");
const successScreen=document.getElementById("successScreen");
const keyBoxes=document.querySelectorAll(".keyBox");
const startButton=document.getElementById("startButton");
const keyMessage=document.getElementById("keyMessage");
const displayKey=document.getElementById("displayKey");
const encryptedMessage=document.getElementById("encryptedMessage");
const answerDisplay=document.getElementById("answerDisplay");
const showAnswerButton=document.getElementById("showAnswerButton");
const nextCodeButton=document.getElementById("nextCodeButton");
const resultBox=document.getElementById("resultBox");
const hintButton=document.getElementById("hintButton");
const hintText=document.getElementById("hintText");
const finalScore=document.getElementById("finalScore");
const restartButton=document.getElementById("restartButton");

const missions=[
{message:"MEET AT TWO"},
{message:"THE EAGLE HAS LANDED"},
{message:"MISSION STARTS NOW"},
{message:"CHECK THE RED DOOR"},
{message:"WAIT FOR MY SIGNAL"},
{message:"THE PACKAGE IS SAFE"}
];

function shuffleMissions(){
    shuffledMissions=[...missions];

    for(let i=shuffledMissions.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [shuffledMissions[i],shuffledMissions[j]]=
        [shuffledMissions[j],shuffledMissions[i]];
    }
}

let currentMission=0;
let numericalKey="";
let score=100;
let answerShown=false;
let shuffledMissions=[];

keyBoxes.forEach((box,index)=>{
box.addEventListener("input",()=>{
box.value=box.value.replace(/[^0-9]/g,"");
if(box.value&&index<keyBoxes.length-1)keyBoxes[index+1].focus();
validateKey();
});
box.addEventListener("keydown",e=>{
if(e.key==="Backspace"&&box.value===""&&index>0)keyBoxes[index-1].focus();
});
});

function validateKey(){
const complete=[...keyBoxes].every(box=>/^[0-9]$/.test(box.value));
startButton.disabled=!complete;
keyMessage.textContent=complete?"KEY ACCEPTED — READY TO START MISSION":"AWAITING NUMERICAL KEY...";
keyMessage.style.color=complete?"#00ff66":"";
}

startButton.addEventListener("click",()=>{
numericalKey=[...keyBoxes].map(b=>b.value).join("");
displayKey.textContent=numericalKey;
currentMission=0;
score=100;
shuffleMissions();
showMission();
startScreen.classList.remove("active");
successScreen.classList.remove("active");
gameScreen.classList.add("active");
});

function encryptMessage(message,key){
let result="";
let keyIndex=0;

for(const character of message){
if(character===" "){
result+=" ";
continue;
}

const shift=parseInt(key[keyIndex%key.length]);
const code=character.charCodeAt(0)-65;
result+=String.fromCharCode(((code+shift)%26)+65);
keyIndex++;
}

return result;
}

function showMission(){

const mission=shuffledMissions[currentMission];

encryptedMessage.textContent=
encryptMessage(mission.message,numericalKey);

answerDisplay.textContent="";
answerDisplay.classList.add("hidden");

showAnswerButton.classList.remove("hidden");
nextCodeButton.classList.add("hidden");

resultBox.textContent="";
resultBox.className="result-box";

hintText.textContent="";
hintButton.disabled=false;

answerShown=false;

document.getElementById("missionNumber").textContent=
String(currentMission+1).padStart(2,"0");
}

showAnswerButton.addEventListener("click",()=>{

if(answerShown)return;

answerDisplay.textContent=
shuffledMissions[currentMission].message;

answerDisplay.classList.remove("hidden");

showAnswerButton.classList.add("hidden");

nextCodeButton.classList.remove("hidden");

resultBox.className="result-box revealed";
resultBox.textContent=
"✓ DECRYPTION COMPLETE — ANSWER REVEALED";

hintButton.disabled=true;

score=Math.max(0,score-10);

answerShown=true;
});

nextCodeButton.addEventListener("click",()=>{

currentMission++;

if(currentMission>=missions.length){
finishGame();
return;
}

showMission();
});

hintButton.addEventListener("click",()=>{
hintText.textContent=
`HINT: Each letter is shifted using the repeating key ${numericalKey}.`;

hintButton.disabled=true;

score=Math.max(0,score-5);
});

function finishGame(){

finalScore.textContent=score;

gameScreen.classList.remove("active");
successScreen.classList.add("active");
}

restartButton.addEventListener("click",()=>{

keyBoxes.forEach(box=>box.value="");

numericalKey="";
currentMission=0;
score=100;
answerShown=false;
shuffledMissions=[];

successScreen.classList.remove("active");
gameScreen.classList.remove("active");
startScreen.classList.add("active");

startButton.disabled=true;

keyMessage.textContent=
"AWAITING NUMERICAL KEY...";

keyMessage.style.color="";

keyBoxes[0].focus();
});

keyBoxes[0].focus();

});
