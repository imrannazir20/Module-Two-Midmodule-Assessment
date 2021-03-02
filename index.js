   //My SMART GOAL: From going through the checklist, I identified that I haven’t been able to console.log 
    //When the button is clicked, I can console.log the number that was input by the user and view it in the chrome dev tools.
    // My Stretch goals: To find out correct sum display, BECAUSE during npm test it didn't pass.
    // Solution:There was a mistake that i did on requirement analysis. I  stored the history result on #dice-para.
   //actually the question asking to store the single result on #dice-para, and save the history on 'ul' tag
document.addEventListener('DOMContentLoaded', () => {
const diceLetters =[
    '&#9856',
    '&#9857',
    '&#9858',
    '&#9859',
    '&#9860',
    '&#9861'
    ];
const rollBtn = document.querySelector('#roll-btn');
const inputBox =document.querySelector('#dice-number-input');
//const history = document.querySelector('#dice-para')
const sumPara = document.querySelector("#sum-para")
let rollNumber = 0
rollBtn.addEventListener('click', rollClicked)
function rollClicked(){
     
console.log('Roll the dice button pressed')
let number =getNumberOfDice()
if (number === 0){
    sumPara.innerHTML="Please insert a value"
    return;
}
createDices(number)
}
function createDices(number){
    // increase the roll number
    rollNumber =rollNumber +1;
    if( rollNumber == 0){

    }else{
        let dices=[]
        for(i=0; i<number; i++){
            dices.push(Math.random()*6)
            dices[i]=(Math.round(dices[i]) % 6) + 1;
        }
        saveToHistory(dices)
    }
}
function saveToHistory(dices){
    let sum =0;    // storing the sum
    let result ='' // storing the letters
    for(i =0; i<dices.length; i++){
        let currentDice= dices[i]
        result += diceLetters[currentDice -1]
        sum =sum +dices[i]
    }
    sumPara.innerHTML= "Sum= " + sum;
    let resultPara = document.querySelector('#dice-para')
    //console.log(result)
    resultPara.innerHTML = result;
    addToHistoryList(result, sum)
}
function addToHistoryList(result, sum){
let newLi=document.createElement('li')
newLi.innerHTML= result+ " Sum = " + sum
let dicePara= document.querySelector('ul')
dicePara.appendChild(newLi)
}
function getNumberOfDice(){
    return Number(inputBox.value)
}

})