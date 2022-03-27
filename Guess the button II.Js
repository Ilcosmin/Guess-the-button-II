var picks = [];
var randomIndex;
function generateButtons() {
  const number = document.getElementById("numb").value;
  for (let i = 1; i <= number; ++i) {
  	let button = document.createElement("button");
	  button.innerHTML = i;
	  button.setAttribute("id", i);
	  picks[i - 1] = i;
	  document.body.appendChild(button);
  }
  randomIndex = picks[Math.floor(Math.random() * picks.length)];
}
