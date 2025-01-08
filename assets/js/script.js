const timerComponents = () => {
    const greeting = document.querySelector(".greeting");
    const timer = document.querySelector(".timer");
    let timerInterval;
    let seconds = 0;

    const greetingActions = () => {
        const hours = new Date().getHours();

        if (hours >= 5 && hours <= 11) {
            return "Bom dia!"
        }
        else if (hours >= 12 && hours <= 18) {
            return "Boa Tarde!"
        }

        return "Boa noite!"
    }

    greeting.innerHTML = greetingActions()

    const getTimerBySeconds = (seconds) => {
        const data = new Date(seconds*1000);
        return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
    }

    const start = () => {
        timerInterval = setInterval(() => {
            ++seconds 
            timer.innerHTML = getTimerBySeconds(seconds);
        }, 1000)
    }

    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("start")) {
            start();
        }
        else if(e.target.classList.contains("pause")){
            clearInterval(timerInterval);
        }
        else {
            clearInterval(timerInterval);
            seconds = 0;
            timer.innerHTML = "00:00:00";
        }
    })

}

timerComponents();