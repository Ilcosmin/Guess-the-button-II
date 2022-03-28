var picks = [];
function generateButtons() {
  	const number = document.getElementById("number").value;
  	for (let i = 1; i <= number; ++i) {
	  	let button = document.createElement("button");
		button.innerHTML = i;
		button.setAttribute("id", "button" + i);
		picks[i - 1] = button.id;
		document.body.appendChild(button);
		document.getElementById("generate").disabled = true;
		let displayText = document.getElementById("secondParagraf");
		displayText.innerHTML = "Choose a button and see if you win!";	
	}
	let randomIndex = picks[Math.floor(Math.random() * picks.length)];
	clickButton(randomIndex);
}

function clickButton(randomIndex) {
	for (let i = 0; i < picks.length; ++i) {
		let button = document.getElementById(picks[i]);
		button.onclick = function () {
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
