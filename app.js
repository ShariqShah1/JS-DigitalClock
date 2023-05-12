function DigitalClock() {
  var date =new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  

  

  if (hrs < 12) {
    hrs = hrs - 12;
  }
  document.getElementById("hrs").innerHTML=hour;
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec;

}
setInterval(DigitalClock,10)
