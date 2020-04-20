const button = document.querySelector('.change--js');
let date = new Date();
let day = date.getDay();
let dayNum = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


console.log(day);

button.addEventListener('click', write)


function write() {
    button.innerHTML = `Today is ${week[day]} <br> ${dayNum}/${month}/${year}`;
}