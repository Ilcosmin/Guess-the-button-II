var picks = [];
function generateButtons() {
  const number = document.getElementById("number").value;
  for (let i = 1; i <= number; ++i) {
	let button = document.createElement("button");
	button.innerHTML = i;
	button.setAttribute("id", "button" + i);
	picks[i - 1] = button.id;
	document.body.appendChild(button);
	document.getElementById("nButtons").disabled = true;
  }
let randomIndex = picks[Math.floor(Math.random() * picks.length)];
clickButton(randomIndex);
}

function clickButton(randomIndex) {
	for (let i = 0; i < picks.length; ++i) {
		let btn = document.getElementById(picks[i]);
		btn.onclick = function () {
		  	let status = "You lost";
			let color = "red";
			if (randomIndex === picks[i]) {
				status = "You win";
				color = "SpringGreen";	
			}
			document.getElementById(picks[i]).innerHTML = status;
			document.getElementById(picks[i]).style.backgroundColor = color;
		};
	}
}
