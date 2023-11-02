let date = new Date();
const day_of_week = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thurday",
    5: "Friday",
    6: "Saturday",
}
// let button = document.getElementById("btn");
// let box = document.getElementById("box");
// button.onclick = () => {
//     let p = document.createElement("p");
//     box.appendChild(p);
//     p.innerHTML = day_of_week[date.getDay()];
// }
let box = document.getElementById("box_date");
let today = document.createElement("p")
let day = document.createElement("p");
let month = document.createElement("p");
let year = document.createElement("p")

box.appendChild(day);
box.appendChild(today)
box.appendChild(month)
box.appendChild(year)

day.innerHTML = day_of_week[date.getDay()]
today.innerHTML = date.getDate()
month.innerHTML = date.getMonth()
year.innerHTML = date.getFullYear();


let box_time = document.getElementById("box_time");
let hrs = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
// p_1.innerHTML = date.getHours()
// p_2.innerHTML = date.getMinutes()
// p_3.innerHTML = date.getSeconds()
// function setTime() {
//     // console.log(date.getSeconds() + 1)
//     console.log(date.setSeconds(20, 0))
// }
function display_time() {
    let time = new Date()
    hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours()
    min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
    sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds()
}
setInterval(display_time, 1000)
// setInterval(setTime, 1000);
