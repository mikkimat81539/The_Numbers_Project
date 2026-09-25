const main_div = document.getElementById("main")

cpu_pick = Math.floor(Math.random() * 100) + 1; // random number

// This function makes a div element
function makeStuff(){
	for (let i = 0; i < 100; i++){
		// create a new div element
		const newDiv = document.createElement("div");

		// add content
		newDiv.textContent = i+1

		newDiv.addEventListener("click", num_select);

		main_div.appendChild(newDiv)

	}
}

console.log(cpu_pick)

// when div is clicked pick number
function num_select(event){
	const num = event.currentTarget.textContent
	
	if (num == cpu_pick){
		console.log("YOU WIN")
		window.location.href = "win.html"
	}

	else {
		console.log("YOU LOSE")
		window.location.href = "lose.html"
	}

}

makeStuff() // call the function

