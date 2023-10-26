const notesCont = document.querySelector(".notcont");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("inputbox");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputbox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesCont.appendChild(inputBox).appendChild(img);
})
notesCont.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorege()
    
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorege()
            }
        })
    }
})
function updateStorege(){
    localStorage.setItem("notes", notesCont.innerHTML);
    
}
function showNotes(){
    notesCont.innerHTML = localStorage.getItem("notes");
}
showNotes();
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})