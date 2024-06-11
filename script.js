let btn = document.querySelector(".submit");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.innerText+=" ";
    ul.appendChild(item);

    delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn);

    inp.value = "";
    console.log("ButtonClicked!");
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove()
        console.log("Delete Button Pressed!!");
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     console.log("selected");
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }