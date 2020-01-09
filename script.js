


// toggle button function
function toggle () {
    // adds toggle class css will  
    document.body.classList.toggle("colorred");

}   

// Event Listener
document.getElementById("addBtn").addEventListener('click', add);

// add button function
function add () {
    // creates element div
    const newDiv = document.createElement("div");
        // adds title 
        newDiv.title = "I’m a box!";
        //adds class
        newDiv.classList.add("box");
        // centers number vertically 
        newDiv.style.alignItems = 'center';
        // centers number horizontally 
        newDiv.style.justifyContent = 'center';
        // appends div to html
        placement.append(newDiv);
        // counter
        var all = document.querySelectorAll("div");
        for (var i=0, max=all.length; i < max; i++) {
            newDiv.innerText = i;
        }

    // removes div 
    newDiv.addEventListener('click', e => {
        newDiv.remove();
    });
}
