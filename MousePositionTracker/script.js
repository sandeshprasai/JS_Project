const xpos =  document.getElementById('xposn')
const ypos = document.getElementById('yposn')

document.querySelector('body').addEventListener('mousemove' , (event)=>
{
    xpos.innerText = `${event.clientX}`
    ypos.innerText = `${event.clientY}`

}   
) 