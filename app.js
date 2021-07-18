const colors = ["green", "red", "blue", "yellow", "purple", "brown", "pink", "violet", "orange", "indigo"];
const btn = document.getElementById("btn");
const colour = document.getElementById("colour")
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  colour.style.color = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}