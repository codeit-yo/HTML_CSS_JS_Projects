let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToButton.addEventListener('click', function() { 
    var paragraph = document.createElement('p')  // when button clicked a new paragrapgh will be created by .createElement
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;  // set value to add to paragraph
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; // makes inputField empty after text added
    paragraph.addEventListener('click', function() { 
        paragraph.style.textDecoration = "line-through"; // cross item off list
    })
    paragraph.addEventListener('dblclick', function() { 
        toDoContainer.removeChild(paragraph); // double click remove from list
    })
})