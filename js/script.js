// localstorage
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let data = {
        name,
        email
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('card-container')
    let loading = `<p>O conforto na palma de suas mãos!</p>`
    

    content.innerHTML = loading

    setTimeout(() => {
        window.location.href='site.html'        
    }, 1000)  
})

// timer
var target_date = new Date("november 26, 2021").getTime()

let days, hours, minutes, seconds
let dots = document.getElementsByClassName('center-p')

setInterval(() => {
    let current_date = new Date().getTime()
    let seconds_f = (target_date - current_date) / 1000

    days= parseInt(seconds_f / 86400);
    seconds_f = seconds_f % 86400
    
    hours = parseInt(seconds_f / 3600);
    seconds_f = seconds_f % 3600
    
    minutes = parseInt(seconds_f / 60)
    seconds = parseInt(seconds_f % 60)

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    document.getElementById('center-p1').innerHTML = ':'
    document.getElementById('center-p2').innerHTML = ':'
    document.getElementById('center-p3').innerHTML = ':'

}, 1000)
