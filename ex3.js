let height = prompt("Enter the height of the tree: ") 
height = parseInt(height);

// main condition
if (!isNaN(height) && height!== "" && height>0){

    // building the container div
    let container = document.createElement("div")
    container.classList.add('container')
    
    // generating the tree
    for (let x = 0; x < height; x++) {
        let stars = `<span class="star">*</span>`
        let volume = `<span class="volume">|</span>`.repeat(x)
        let padd = " ".repeat(height - x)

        let tree = document.createElement('div');
        tree.classList.add('tree');
        tree.innerHTML = padd + stars + volume + stars;

        // adding the tree div to the document
        container.appendChild(tree)
    }

    // adding the whole picture to the document
    document.body.appendChild(container)
    
}
else{
    alert("Please enter a valid height")
}