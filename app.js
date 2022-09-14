const clock = () => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let shift = `AM`;

  if (hours < 10) {
    hours = `0${hours}`;
  } else if (hours > 12) {
    shift = `PM`;
    hours = `0${hours - 12}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let time = document.getElementById(`clock`);
  time.innerHTML = `<p>TIME NOW IS:<br> ${hours} : ${minutes} : ${seconds} ${shift}</p>`;
};

setInterval(clock, 1000);
