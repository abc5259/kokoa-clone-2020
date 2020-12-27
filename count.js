const today = new Date();
const meetDay = new Date(2019,7,18);
const timeDay = today.getTime() - meetDay.getTime();
const day = Math.ceil(timeDay / (1000 * 60 * 60 * 24)); //일
const d_day = document.getElementsByClassName("d__Day");
d_day[0].innerHTML = `${day}%`;
d_day[0].style.color = "#e4b8d2";



let total = 0;
const message = document.getElementsByClassName("badge");

if (message[0]) {
    if (message.length === 1) {
        message[0].innerHTML= 50
    } else {
        for (let i = 0; i < message.length - 1; i++) {
            total += parseInt(message[i].innerHTML)
        }   
        message[message.length - 1].innerHTML = total;
    }
}

