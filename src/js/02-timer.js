
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      window.alert("Please choose a date in the future");
      return;
    }

    startButton.removeAttribute("disabled");
  },
};

const dateTimePicker = flatpickr("#datetime-picker", options);

const startButton = document.querySelector("[data-start]");
const timerFields = document.querySelectorAll(".value");
const dateTimeInput = dateTimePicker._input;
let countdownInterval;

startButton.addEventListener("click", startCountdown);

function startCountdown() {
  const selectedDate = dateTimePicker.selectedDates[0];
  const now = new Date();

  if (selectedDate <= now) {
    return;
  }

  startButton.setAttribute("disabled", true);
  dateTimeInput.setAttribute("disabled", true);

  countdownInterval = setInterval(updateCountdown, 1000, selectedDate);
}

function updateCountdown(targetDate) {
  const timeDifference = targetDate - new Date();

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    updateTimerDisplay(0, 0, 0, 0);
    dateTimeInput.removeAttribute("disabled");
    startButton.removeAttribute("disabled");
    return;
  }

  const timeComponents = convertMs(timeDifference);
  updateTimerDisplay(
    timeComponents.days,
    timeComponents.hours,
    timeComponents.minutes,
    timeComponents.seconds
  );
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  timerFields[0].textContent = addLeadingZero(days);
  timerFields[1].textContent = addLeadingZero(hours);
  timerFields[2].textContent = addLeadingZero(minutes);
  timerFields[3].textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}