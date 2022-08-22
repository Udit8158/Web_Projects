// Grab time showing element
const clockTime = document.querySelector(".time-text");
// Alarm Related
const showAlarmSectionBtn = document.querySelector(".alarm-section-open");
const alarmSection = document.querySelector(".alarm-section");
const setAlarmBtn = document.querySelector(".set-alarm");
const stopAlarmBtn = document.querySelector(".stop-alarm");
const hourInput = document.querySelector(".hour");
const minuteInput = document.querySelector(".minute");
const secondInput = document.querySelector(".second");
const alarmAlert = document.querySelector(".alert-message-section");
// Timer Related
const showTimerSection = document.querySelector(".timer-section-open");
const timerSection = document.querySelector(".timer-section");
const startTimerBtn = document.querySelector(".start-timer");
const stopTimerBtn = document.querySelector(".stop-timer");
const clearTimerBtn = document.querySelector(".clear-timer");
const timerText = document.querySelector(".timer-text");

// Showing time on the screen
setInterval(() => {
  const date = new Date();

  // Taking hours minutes and seconds with the extran 0 for 1 digit numbers
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  // Set time on site
  clockTime.innerHTML = `${hour} : ${minute} : ${second}`;
}, 1000);

// Alarm setting feature

// Make alarm tone
const alarmTone = new Audio("./assets/alarmtone.mp3");

// Function for setting alarm
const setAlarm = () => {
  // User's input value for alarm time
  const hourValue = hourInput.value;
  const minuteValue = minuteInput.value;
  const secondValue = secondInput.value;
  // Take the time showing in screen
  const [screenHour, screenMinute, screenSecond] = [
    clockTime.innerHTML.slice(0, 2),
    clockTime.innerHTML.slice(5, 7),
    clockTime.innerHTML.slice(10, 12),
  ];

  // For debug
  // console.log("1...", screenHour, screenMinute, screenSecond);
  // console.log("2...", hourValue, minuteValue, secondValue);

  // Cheecking the screen time with the alarm time [user + 1 in screen time second because the program run after 1 sec so I do this to remove the 1 sec delay in the alarm ringing time]
  if (
    screenHour === String(hourValue) &&
    screenMinute === String(minuteValue) &&
    Number(screenSecond) + 1 === Number(secondValue)
  ) {
    alarmTone.play();
  }
};

// Show alarm section and maintainng alarm section hide and show
showAlarmSectionBtn.addEventListener("click", () => {
  // Check if timersection is hide or not as I want to show either alarmsection or timer section one at a time
  if (!timerSection.classList.contains("d-none")) {
    timerSection.classList.add("d-none");
  }
  alarmSection.classList.toggle("d-none");

  // Set alarm button functionality controll
  setAlarmBtn.addEventListener("click", () => {
    // Show alarm alert
    alarmAlert.classList.toggle("d-none");
    setTimeout(() => {
      alarmAlert.classList.toggle("d-none");
    }, 5000);
    // Run the function in every 1s to check if time match or not
    setInterval(() => {
      setAlarm();
    }, 1000);
  });

  // Stop alarm button functionality
  stopAlarmBtn.addEventListener("click", () => {
    alarmTone.pause();
  });
});

// TIMER FEATURE
let timerIndex = 0;
const timerAdjustment = () => {
  // Timer hour minute and second form the timertext
  let timerHour = Number(timerText.innerHTML.slice(0, 2));
  let timerMinute = Number(timerText.innerHTML.slice(5, 7));
  let timerSecond = Number(timerText.innerHTML.slice(10, 12));

  // Change timer second every second
  const secondInterval = setInterval(() => {
    if (timerSecond < 60) {
      timerSecond++;
    } else {
      timerSecond = 0;
    }
    timerText.innerHTML = `${timerHour < 10 ? `0${timerHour}` : timerHour} : ${
      timerMinute < 10 ? `0${timerMinute}` : timerMinute
    } : ${timerSecond < 10 ? `0${timerSecond}` : timerSecond}`;
  }, 1000);

  // Change timer minute every minute
  const minuteInterVal = setInterval(() => {
    if (timerMinute < 60) {
      timerMinute++;
    } else {
      timerMinute = 0;
    }

    timerText.innerHTML = `${timerHour} : ${timerMinute} : ${timerSecond}`;
  }, 1000 * 60);

  // Change timer hour every hour
  const hourInterval = setInterval(() => {
    timerHour++;
    timerText.innerHTML = `${timerHour} : ${timerMinute} : ${timerSecond}`;
  }, 1000 * 60 * 60);

  // These 2 functionality in the same function because of vairable access of clearInterval
  // Clear Timer Functionality
  clearTimerBtn.addEventListener("click", () => {
    timerText.innerHTML = "00 : 00 : 00";
    clearInterval(secondInterval);
    clearInterval(minuteInterVal);
    clearInterval(hourInterval);
  });

  // Stop Timer Functionality
  stopTimerBtn.addEventListener("click", () => {
    clearInterval(secondInterval);
    clearInterval(minuteInterVal);
    clearInterval(hourInterval);
  });
};

// Show timer section
showTimerSection.addEventListener("click", () => {
  if (!alarmSection.classList.contains("d-none")) {
    alarmSection.classList.add("d-none");
  }
  timerSection.classList.toggle("d-none");

  // Start timer
  startTimerBtn.addEventListener("click", () => {
    timerAdjustment();
  });
});
