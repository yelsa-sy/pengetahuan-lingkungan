let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");

function displayTime() {
    let day = new Date();

    let hh = day.getHours() % 12;
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    let hrotation = 30 * hh + mm / 2;
    let mrotation = 6 * mm;
    let srotation = 6 * ss;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000);
