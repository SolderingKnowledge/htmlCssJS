var button= document.querySelector('.click-button');
var arr = ["red", "yellow", "black", "grey", "orange", "blue"]
var index = arr.length;

button.addEventListener("click", function(){
    document.querySelector("h1").style.color = arr[index -= 1];
    if(index == 0 ){
        index = arr.length;
    }
})