const recipeInput = document.getElementById("recipe-title-input") //method takes string id of element we want to grab
const urlInput = document.getElementById("recipe-url-input")
const recipeTableBody = document.getElementById("recipe-table-body")

//Function called by our onclick event, takes event as a parameter
function addRecipe(event){
    //method prevents page from refreshing once you click the add button
    event.preventDefault()
    //Create element node: add new Tr to our table
    const newTr = document.createElement("tr")
    //Set inner HTML with template literal, whatever values are entered in recipeInput and urlInput will show up on the table
    //Also automatically add delete button along with new table content in case we no longer want it
    newTr.innerHTML = `
    <td>${recipeInput.value}</td>
    <td>${urlInput.value}</td>
    <td><button id= "delete-button" class="btn btn-sm btn-outline-danger">Delete</button></td>
    `

    //grab button and add event listener to that button
    //give callback function to call when click event happens
    newTr.querySelector("#delete-button").addEventListener("click", () => {
        newTr.remove()
    })
    //Move tr onto the page
    //appendChild() method adds node to end of the list of children of parent node
    recipeTableBody.appendChild(newTr)

    //clear input fields with empty strings after we have added input to the table
    recipeInput.value =""
    urlInput.value =""
}