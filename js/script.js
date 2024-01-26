document.addEventListener('DOMContentLoaded', function() {
    const savedCount = localStorage.getItem('counterValue');
    document.getElementById('counter').innerHTML = (savedCount !== null) ? savedCount : 0;
});

function decrement() {
    const counter = document.getElementById("counter");
    const current = Number(counter.innerHTML);
    if(current > 0) counter.innerHTML = (String(current-1));
    localStorage.setItem("counterValue", counter.innerHTML);
}

function increment() {
    const counter = document.getElementById("counter");
    const current = Number(counter.innerHTML);
    counter.innerHTML = (String((current+1)));
    localStorage.setItem("counterValue", counter.innerHTML);
}

function reset() {
    document.getElementById("counter").innerHTML = 0;
    localStorage.setItem("counterValue", 0);
}

function handleKeyDown(event) {
    if(event.keyCode === 38 || event.keyCode === 39) {
        increment();
    }
    if(event.keyCode === 40 || event.keyCode === 37) {
        decrement();
    }
    if(event.keyCode === 13) {
        reset();
    }
}

function handleScroll(event) {
    if(event.deltaY < 0) increment();
    if(event.deltaY > 0) decrement();
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('wheel', handleScroll);