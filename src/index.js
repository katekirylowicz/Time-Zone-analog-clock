
import "./Scss/styles.scss";

let hand_seconds = document.querySelector('.hand_seconds');
let hand_minutes = document.querySelector('.hand_minutes');
let hand_hours = document.querySelector('.hand_hours ');
const yourCity = document.querySelector('.choseCity');


let timeZone;
const selectCity = document.querySelector('select');
selectCity.addEventListener("onChange", changeCity);

function changeCity() {

    document.querySelector('.choseCity').innerHTML = selectCity.value
    timeZone = selectCity.value;
    console.log(timeZone);

    return timeZone;
};

yourCity.innerHTML = selectCity.value;



function clockRotating() {
    var data = new Date();
    var indexSeconds = data.getSeconds();
    var indexMinutes = data.getMinutes() + indexSeconds / 60;
    var indexHours = (data.getHours() < 12 ? data.getHours() : (data.getHours() - 12)) + indexMinutes / 60;
    console.log(indexHours, indexMinutes, indexSeconds);

    hand_seconds.style.transform = (`rotate(${indexSeconds * 6}deg)`);
    hand_minutes.style.transform = (`rotate(${indexMinutes * 6}deg)`);
    hand_hours.style.transform = (`rotate(${indexHours * 30}deg)`);


}

const clock = () => {
    let time = new Date();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    document.querySelector('.current-time').innerHTML = (`${hours}:${minutes}:${seconds}`);
}

//function clockLocale() {
//let smallClock = moment().format('LTS');

//  console.log(smallClock);
//}
//clockLocale();

//function clockRotatingLocale() {


//}



clockRotating();
clock();

setInterval(clockRotating, 1000);
setInterval(clock, 1000);