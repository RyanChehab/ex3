let height = prompt("Enter the height of the tree: ") 
height = parseInt(height);

// main condition
if (!isNaN(height) && height!== "" && height>0){

    console.log(height)
    let container = document.createElement("div")
    container.classList.add('container')
    
    // generating the tree
    for (let x = 0; x < height; x++) {
        let volume = " ".repeat(height - x - 1)+ "*" + "  |  ".repeat(x) + "*";
        let tree = document.createElement("div");
        tree.innerHTML = volume;
        container.appendChild(tree);
    }
    
    document.body.appendChild(container)
}
else{
    alert("Please enter a valid height")
}