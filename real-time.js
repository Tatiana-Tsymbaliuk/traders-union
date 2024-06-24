function updateTime() {
  var timeElement = document.getElementById("currentTime");
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");
  var formattedTime = hours + ":" + minutes + ":" + seconds;
  var datetimeValue = now.toISOString().split("T")[0] + "T" + formattedTime;
  timeElement.textContent = formattedTime;
  timeElement.setAttribute("datetime", datetimeValue);
}

document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);
});
