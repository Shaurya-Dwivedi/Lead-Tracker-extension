let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.querySelector("#ul-el");
const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value=""
    renderLeads();
    // console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);
}

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li>" + "<a href =' "+ myLeads[i] +"' target='_blank'> "+myLeads[i]+"</a> </li>";
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