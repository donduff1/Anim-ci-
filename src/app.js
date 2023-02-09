const doboz1 = document.querySelector("#doboz1");
const startButton = document.querySelector("#startButton");

startButton.addEventListener('click', () =>{
    console.log('működik');
    doboz1.style.backgroundColor = "blue";
    doboz1.style.animation = "bito1 5s";
});