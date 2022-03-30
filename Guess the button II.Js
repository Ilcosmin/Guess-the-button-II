function generateButtons() {
  	const number = document.getElementById("number").value;
  	for (let i = 1; i <= number; ++i) {
	  	let button = document.createElement("button");
		button.innerHTML = i;
		button.setAttribute("id", i);
		document.body.appendChild(button);
		document.getElementById("generate").disabled = true;
		document.getElementById("secondParagraf").innerHTML = "Choose a button and see if you win!";	
	}
	let randomIndex = Math.floor(Math.random() * number) + 1;
	clickButton(randomIndex, number);
}

function clickButton(randomIndex, number) {
	for (let i = 1; i <= number; ++i) {
		document.getElementById(i).onclick = function () {
		  	let status = "You lost";
			let color = "red";
			if (randomIndex === i) {
				status = "You win";
				color = "SpringGreen";	
			}
			document.getElementById(i).innerHTML = status;
			document.getElementById(i).style.backgroundColor = color;
		};
	}
}
