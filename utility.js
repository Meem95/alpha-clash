function hideElement(elementID){
    const element = document.getElementById(elementID) 
   // console.log(element)
    element.classList.add('hidden');
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}
function shownElement(elementID){
    const shownElement = document.getElementById(elementID);
    shownElement.classList.remove('hidden');
    //console.log(shownElement)
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    console.log(alphabet);

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);

    const randomAlphabet = alphabet[index];
    //console.log(randomAlphabet);
    return randomAlphabet;
}