const button = document.getElementById("btn");

const times = document.getElementById("times");

const heading = document.getElementById("heading");

button.addEventListener("click", () => {
    times.classList.remove('close');
    times.classList.add('open')
    heading.innerText = "hello";
    button.classList.remove('show');
    button.classList.add('hide')
});


times.addEventListener('click',()=>{
    times.classList.add('close');
    times.classList.remove('open')
    heading.innerText = "Modal Project";
    button.classList.add('show');
    button.classList.remove('hide')
})