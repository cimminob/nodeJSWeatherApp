
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location=search.value
    messageTwo.textContent='forecast is loading'
    messageOne.textContent=''
    fetch('/weather?address='+location).then(response=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=error
            messageTwo.textContent=''
        }
        else {
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
    })
})
})