//get the hands
const secondHand = document.querySelector('.second-hand');
const minHand= document.querySelector(".min-hand");
const hourHand = document.querySelector("hour-hand");


const setDate= function () {
    //get today's date
    const now= new Date();

    //get the seconds
    const seconds= now.getSeconds();
    console.log(seconds);
    //we need degrees
    const secondsDegrees= ((seconds/60) *360) + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    //get the minds
    const minutes= now.getMinutes();
    const minutesDeg= ((minutes/60)*360 + 90);
    minHand.style.transform= `rotate(${minutesDeg}deg)`;


}

setInterval(setDate, 1000);