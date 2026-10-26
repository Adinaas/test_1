// 1-задача

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));
console.log(containsOnlyDigits());

// 2-задача

const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда")
    },1000)
};
logEverySecond();

// 3-задача
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}

count();

// 4-задача
const box = document.querySelector('#myBox');

box.addEventListener('click', e => {
    box.classList.toggle('active-bg');
})

// 5-задача

const xhr = new XMLHttpRequest ()
xhr.open('GET', 'data.json')
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send()

xhr.onload = () => {
    console.log(xhr.response)
}









