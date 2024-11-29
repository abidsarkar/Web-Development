const hours = document.querySelector('.hours p');
const minutes = document.querySelector('.minutes p');
const seconds = document.querySelector('.seconds p');
const h24Button = document.querySelector('.h24');
const h12Button = document.querySelector('.h12');
const isMorning = document.querySelector('.isMorning');
let is24HourFormat = false;

function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');

  if (is24HourFormat) {
    hours.textContent = hour;
    isMorning.style.display = "none"
  } else {
    // 12-hour format
    if(hour>12){
        isMorning.textContent = 'PM';
    }
    hour = hour % 12 || 12;
    hours.textContent = hour;
    isMorning.style.display = "block"
    
  }

  minutes.textContent = minute;
  seconds.textContent = second;
}

setInterval(updateClock, 1000);

h24Button.addEventListener('click', () => {
  is24HourFormat = true;
  h24Button.classList.add('active');
  h12Button.classList.remove('active');
  updateClock();
});

h12Button.addEventListener('click', () => {
  is24HourFormat = false;
  h12Button.classList.add('active');
  h24Button.classList.remove('active');
  updateClock();
});