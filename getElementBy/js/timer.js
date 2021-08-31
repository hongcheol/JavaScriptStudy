window.addEventListener('load', function () {

  document.getElementsByTagName('button')[0].addEventListener('click', function () {
    
      
    var hour = document.getElementById('hour').value;
    var min = document.getElementById('min').value;
    var sec = document.getElementById('sec').value;
    var timerId = null;
    if(hour==="") hour = 0;
    if(min === "") min = 0;
    if(sec === "") sec = 0;
    function printTime(){
      let doc = document.getElementById('remainTime');
      if(hour == 0 && min == 0 && sec == 0) {
        clearInterval(timerId);
        doc.innerHTML = "<h1>Time Over!!</h1>";
      }
      else{
        if(sec != 0){
          sec -= 1;
        }else{
          if(min != 0){
            min -= 1;
            sec = 59;
          }else{
            if(hour != 0){
              hour -= 1;
              min = 59;
            }
          }
        }
        doc.innerHTML = "<h1>"+modifyNumber(hour)+ ":"+ modifyNumber(min)+":"+modifyNumber(sec)+"</h1>";
      }
      
      
    }
    function timeIsTicking(){
      printTime();
      timerId = setInterval(printTime,1000);
    }
    function modifyNumber(time){
      if(time == null){
        return "00";
      }
      else if(parseInt(time)<10){
          return "0"+ time;
      }
      else
          return time;
    }
    timeIsTicking();
  });

});
