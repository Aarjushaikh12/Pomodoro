window.onload=function()
{
    var startButton=document.getElementById("start");
    var resetButton=document.getElementById("reset");
    var timerElement=document.getElementById("timer");

    startButton.addEventListener("click",startTimer);
    resetButton.addEventListener("click",resetTimer);

    function startTimer()
    {
        startButton.disabled=true;
        resetButton.disabled=false;

        var timeLeft=25*60;

        timer=setInterval(function()
        {
            var minutes=Math.floor(timeLeft/60);
            var seconds=timeLeft%60;

            timerElement.innerHTML=formatTime(minutes) + ":" + formatTime(seconds);

            if (timeLeft===0)
            {
                clearInterval(timer);
                startButton.disabled=false;
                resetButton.disabled=true;
            }
            timeLeft--;
        },1000);
    }

        function resetTimer()
        {
            clearInterval(timer);
            timerElement.innerHTML="25:00";
            startButton.disabled=false;
            resetButton.disabled=true;
        }
        function formatTime(time)
        {
            return time < 10 ? "0" + time : time;
        }
 };
