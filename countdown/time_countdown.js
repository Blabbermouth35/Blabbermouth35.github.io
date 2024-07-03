function main(){
    let now = new Date().getTime();
    let time_remaining = end_date - now;
    let days = Math.floor(time_remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_remaining % (1000 * 60)) / 1000);
}

let end_date = new Date("July 29, 2024 00:00:01").getTime();
setInterval(main, 1000);