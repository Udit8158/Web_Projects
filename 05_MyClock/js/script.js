setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hourHandRotation = 30 * hour + minute / 2;
  let minuteHandRotation = 6 * minute;
  let secondHandRotation = 6 * second;

  hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
  secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
  let para = document.getElementById("para");
  para.innerHTML = date;
}, 1000);
