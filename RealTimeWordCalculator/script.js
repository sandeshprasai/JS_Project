
const result = document.getElementById('result')
const remeningCharacters = document.getElementById('remeningCharacters');

const evntList = document.getElementById('inputText')
let res=0    
evntList.addEventListener("input", ()=>
{
    const string = document.getElementById('inputText').value
    res= string.length;
    result.innerHTML= `Total Charaters: ${res}`
    remeningCharacters.innerHTML= `Remaining: ${100-res}`
})