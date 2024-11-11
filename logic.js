const titleInput = document.getElementById("todo_title")
const descInput = document.getElementById("todo_desc")
const todoDisplay = document.getElementById("todo_display")
const todos = []

function performOperation(){
    const newTodo = {
        title: titleInput.value,
        desc: descInput.value,
        completion: false
    }
    todos.push(newTodo)
    updateTodoDisplay()
    titleInput.value = ""
    descInput.value = ""

}
function updateTodoDisplay(){
    todoDisplay.innerHTML = void
    todos.forEach(function(elements,index)
    {   
        const todo =document.createElement("div")
        todo.className = "todo-item"
        todo.innerHTML = `
            <span class="${elemnts.completion ? 'completed': ""}">
                ${elements.title}: ${elements.dest}
            </span>

            <button onclick="toggle(${index})">
                ${elemnts.completion ? 'completed': 'Incompleted'}"
            </button>
        `
        todoDisplay.appendChild(todo)

    })
    function toogle(index){
        todoDisplay.[index].completion = !todos[index].completion
        updateTodoDisplay()
    }
}