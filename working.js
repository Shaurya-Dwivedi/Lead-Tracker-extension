let myLeads = []
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const ulEl = document.querySelector("#ul-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const delBtn = document.getElementById("del-btn")

if (leadFromLocalStorage) {
    myLeads = leadFromLocalStorage;
    render(myLeads);

}

function render(data) {
    let listItems = "";
    for (let i = 0; i < data.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${data[i]}" >
            ${data[i]}
            </a>
              </li>
        `
    }
    ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function () {


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
    )
}
)



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);

    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads);

})
delBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
