document.addEventListener('DOMContentLoaded', () => {
const diceLetters =[
    '&#9856',
    '&#9857',
    '&#9858',
    '&#9859',
    '&#9860',
    '&#9861'
    ]
const rollBtn = document.querySelector('#roll-btn')
const inputBox =document.querySelector('#dice-number-input')
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
    if( rollNumber === 0){

    }else{
        let dices=[]
        for(i=0; i<number; i++){
            dices.push(Math.random()*6)
            dices[i]=(Math.round(dices[i])%6)+1;
        }
        saveToHistory(dices)
    }
}
function saveToHistory(dices){
    let sum =0;
    let result =''
    for(i =0; i<dices.length; i++){
        let currentDice= dices[i]
        result =result+''+ diceLetters[currentDice-1]
        sum =sum +dices[i]
    }
    sumPara.innerHTML= "Sum= " +sum;
    let resultPara =document.querySelector('#result-para')
    resultPara.innerHTML =result
    addToHistoryList(result, sum)
}
function addToHistoryList(result, sum){
let newLi=document.createElement('li')
newLi.innerHTML= result+ "=" +sum
let dicePara= document.querySelector('#dice-para')
dicePara.appendChild(newLi)
}
function getNumberOfDice(){
    return Number(inputBox.value)
}

})