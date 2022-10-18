// DOM Elements
let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");

// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();
