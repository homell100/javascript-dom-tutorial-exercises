// Your code here

var listItems = document.querySelector("ul");
var taskInput = document.querySelector("#addToDo");
var rmvImgList = document.querySelectorAll(".fa-trash");


function addItemToList(item){
    liNewItem = document.createElement("li");
    liNewItem.innerHTML = item;
    listItems.appendChild(liNewItem);
    

    spanNewItem = document.createElement("span");
    liNewItem.appendChild(spanNewItem);

    iNewItem = document.createElement("i");
    iNewItem.className = "fa fa-trash";
    spanNewItem.appendChild(iNewItem); 
}

document.addEventListener("change", addRmvFunctionaility);

function addRmvFunctionaility(){
    for(i=0; i<rmvImgList.length; i++){
        rmvImg = rmvImgList[i];
        console.log(i);
        rmvImg.addEventListener("click", function(event){
            var target = event.target;
            console.log(target);
            listItems.removeChild(target.parentNode.parentNode);
        })
    }
}

taskInput.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        addItemToList(taskInput.value)
    }
});



// var itemList = document.querySelector("#parentLI");
// var secondItem = itemList.childNodes[3];
// secondItem.parentNode.removeChild(secondItem);