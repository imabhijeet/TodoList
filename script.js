const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    if(inputBox.value === '') 
        alert("Enter your Task first!")
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // for displaying cross
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = ''; //to clear the text from inputbox after adding
    saveData(); //this will save the content
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') { //checked list
        e.target.classList.toggle('checked');   // If the class is present, it will be removed; if it's not present, it will be added.
        saveData(); //this will save the content
    }
    else if(e.target.tagName === 'SPAN') { //cross
        e.target.parentElement.remove(); //parent element is li
        saveData(); //this will save the content
    }
}, false);

// to save the data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// to display the stored data whenever we open or refresh the page
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // get the content stored in the browser stored by the name "data"
}
showTask();