//get the seconds hand
const secondHand = document.querySelector('.second-hand');

const setDate= function () {
    //get today's date
    const now= new Date();
    //get the seconds
    const seconds= now.getSeconds();
    console.log(seconds);
    //we need degrees
    const secondsDegrees= ((seconds/60) *360) + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

}

setInterval(setDate, 1000);