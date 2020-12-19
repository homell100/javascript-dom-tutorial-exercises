let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	divContainer = document.createElement("div");
	divContainer.style.backgroundColor = "yellow";
	divContainer.innerHTML = "Hello World";

	body = document.querySelector("body");
	body.appendChild(divContainer);



});
