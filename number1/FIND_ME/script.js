const main_div = document.getElementById("main")

for (let i = 0; i < 100; i++){
	// create a new div element
	const newDiv = document.createElement("div");

	// add content
	newDiv.textContent = i+1

	main_div.appendChild(newDiv)

}
