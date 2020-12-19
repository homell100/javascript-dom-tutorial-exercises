window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

  // your code here
  for(i=0; i< countries.length; i++){
	var select = document.querySelector("#mySelect");
	var option = document.createElement("option");
	option.value = countries[i];
	option.innerHTML = countries[i];
	select.appendChild(option);

  }
};
