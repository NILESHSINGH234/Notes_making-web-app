const notesContainer=document.querySelector('.notes-container')
const createBtn=document.querySelector('.btn');
let notes=document.querySelector('.input-box');
function showNotes()
{
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement('p');
    let img=document.createElement('img');
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
