function updateTime() {

    let hours = document.querySelector('.hours')
    let minutes = document.querySelector('.minutes')
    let seconds = document.querySelector('.seconds')

    const date = new Date();

    let secondsNow = date.getSeconds()
    let minutesNow = date.getMinutes()
    let hoursNow = date.getHours()

    let secondsAngle = secondsNow * 6 - 90
    let minutesAngle = minutesNow * 6 - 90
    let hoursAngle = hoursNow * 30 - 90 + minutesAngle / 360 * 30

    hours.style.transform = `rotate(${hoursAngle}deg)`;
    minutes.style.transform = `rotate(${minutesAngle}deg)`;
    seconds.style.transform = `rotate(${secondsAngle}deg)`;

}

setInterval(updateTime)