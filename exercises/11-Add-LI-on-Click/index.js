let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	liItem = document.createElement("li");
	nLiItems = document.querySelectorAll("#myList li").length + 1;
	liItem.innerHTML = nLiItems + " item";
	ulList = document.querySelector("#myList");
	ulList.appendChild(liItem);

});
