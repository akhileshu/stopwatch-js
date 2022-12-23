let screen = document.querySelector("#screen");
let share = document.querySelector(".share");
let data = document.querySelector(".data");
let reset = document.querySelector(".reset");
let playpause = document.querySelector("#playpause");

function showtime(sec) {
  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + " min " + ": " + seconds + " sec ";
}

let countsec = 0;
var interval;
let no = 0;
let newdata = 0;

playpause.addEventListener("click", () => {
  playpause.classList.toggle("pp");
  if (playpause.classList.contains("pp")) {
    playpause.innerHTML = "pause";
    clearInterval(interval);
    interval = setInterval(() => {
      countsec += 1;

      screen.innerHTML = showtime(countsec);
    }, 1000);
  } else {
    playpause.innerHTML = "play";
    clearInterval(interval);
    playpause.classList.remove("pp1");
    console.log(showtime(countsec));
  }
});

share.addEventListener("click", () => {
  if (countsec != 0) {
    no++;
    let remark = prompt("add remark for this");
    if(remark===null){
      data.innerHTML += `${no} : ${showtime(countsec)}<hr>`;
    }
    else{

      data.innerHTML += `${remark} : ${showtime(countsec)}<hr>`;
    }
  }
});

reset.addEventListener("click", function refreshPage() {
  // window.location.reload();
  countsec = 0;
  screen.innerHTML = showtime(countsec);
});
