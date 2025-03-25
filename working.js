let myLeads= []
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const ulEl = document.querySelector("#ul-el")
const inputBtn = document.getElementById("input-btn")
const delBtn=document.getElementById("del-btn")
if(leadFromLocalStorage)
{
    myLeads = leadFromLocalStorage;
    renderLeads();
    
}
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
   
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads();
    
})
delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems+=`
        <li>
            <a target="_blank" href="${myLeads[i]}" >
            ${myLeads[i]}
            </a>
              </li>
        `
    }
    ulEl.innerHTML = listItems;
}