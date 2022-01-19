
import "./Scss/styles.scss";

const ZoneOffsetValue = {
    Chicago: -6,
    Dubaj: 3,
    Istambuł: 2,
    Kair: 1,
    London: -1,
    Meksyk: -9,
    Moskwa: 2,
    NowyJork: -6,
    Paryż: 0,
    Pekin: 7,
    SaoPaulo: -4,
    Seul: 8,
    Singapur: 7,
    Sydney: 10,
    TelAviv: 1,
    Tokyo: 8,
    Toronto: -6,
    Warszawa: 0,
    Waszyngton: -6,
};
//the offset value is reduced by 1 h - Date.now() taken time from the locally computer in Warsaw, not greenwich area 
let timeZoneSelected = "Warszawa";
let offsetValue = 0;
let hand_seconds = document.querySelector('.hand_seconds');
let hand_minutes = document.querySelector('.hand_minutes');
let hand_hours = document.querySelector('.hand_hours ');

const selectCity = document.querySelector('#TimeZone');
const cityV = document.querySelector('.cityValue');


function changeCity() {
    console.log(selectCity.value);
    timeZoneSelected = selectCity.value;
    cityV.innerHTML = timeZoneSelected;

    if (ZoneOffsetValue.hasOwnProperty(timeZoneSelected)) {
        offsetValue = ZoneOffsetValue[timeZoneSelected];
    }
};

cityV.innerHTML = timeZoneSelected;

console.log(offsetValue);


function clockRotating() {
    const now = Date.now();
    const offsetNow = now + offsetValue * 3600 * 1000;
    let data = new Date(offsetNow);

    let indexSeconds = data.getSeconds();
    let indexMinutes = data.getMinutes() + indexSeconds / 60;
    let indexHours = (data.getHours() < 12 ? data.getHours() : (data.getHours() - 12)) + indexMinutes / 60;
    // console.log(indexHours, indexMinutes, indexSeconds);


    hand_seconds.style.transform = (`rotate(${indexSeconds * 6}deg)`);
    hand_minutes.style.transform = (`rotate(${indexMinutes * 6}deg)`);
    hand_hours.style.transform = (`rotate(${indexHours * 30}deg)`);


}

const clock = () => {
    const now = Date.now();
    const offsetNow = now + offsetValue * 3600 * 1000;
    let time = new Date(offsetNow);
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    document.querySelector('.current-time').innerHTML = (`${hours}:${minutes}:${seconds}`);
};


selectCity.addEventListener("change", changeCity);

clockRotating();
clock();

setInterval(clockRotating, 1000);
setInterval(clock, 1000);