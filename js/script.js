let time = document.querySelector('.time')
let newTime = document.querySelector('.new_time')
let btn = document.querySelector('.btn')

let input = document.querySelector('[type="text"]') 

input.addEventListener('input',(e)=>{
    let value = e.target.value
})

btn.addEventListener('click',getUtcTimeZone)

function getUtcTimeZone(){
    let res = 0
    let time = +input.value
    let ms = time * 60 * 60 * 1000
    let milliSeconds = Date.parse(date)
    if(time < 0){
      res =  milliSeconds - Math.abs(ms)
    }else{
       res = milliSeconds + ms
    }
    let now = new Date(res).toUTCString()
    newTime.innerText =  now + timer(time)

}

function timer(v){
    if(v < 0){
        return `-0${Math.abs(v)}00`
      }else{
        return `+0${v}00`
      }
}


let date = new Date().toUTCString()
time.innerText = date + '+0000'


let myTime = document.querySelector('.my_time')
let myDate = new Date()
myTime.innerText = myDate




setInterval(()=>{
    let date = new Date() 
    myTime.innerText = date
    time.innerText = date.toUTCString() + '+0000'
},1000)

