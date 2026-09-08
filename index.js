console.log("Digital Time");
let timeObj = document.getElementById("timer");

// creating modern function
const startTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
  let sec = date.getSeconds();

    return `${hour} : ${min} : ${sec}`;
}

setInterval(function setTime() {
  timeObj.innerHTML = startTime();
},1000);
