const timerComponents = () => {

    const timer = document.querySelector(".timer");
    let timerInterval;

    const formatValue = (value) => {
        return value < 10 ? `0${value}` : value;
    }

    let seconds = 0;
    let minutes = 0;
    let hours = 23;

    const start = () => {
        timerInterval = setInterval(() => {
            if (seconds < 59) {
                seconds++;
            }
            else if (seconds === 59 && minutes < 59) {
                seconds = 0;
                minutes++;
            }
            else if (minutes === 59) {
                seconds = 0;
                minutes = 0;
                hours = hours < 22 ? hours++ : 0;
            }
    
            timer.innerHTML = `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`
        }, 1000);
    
    }
    
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("start")){
            start();
        }
        else if (e.target.classList.contains("pause")){
            clearInterval(timerInterval);
        }
        else{
            clearInterval(timerInterval);
            seconds = 0;
            minutes = 0;
            hours =  0;
            timer.innerHTML = "00:00:00";
        }
    })
}

timerComponents();



