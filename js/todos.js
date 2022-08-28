function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>displayTodos(data))

}


function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        //creat the child element
            const div = document.createElement('div');
            //set innerText or innerHTML
            div.innerHTML=`

                <h3>title: ${todo.title}</h3>
                <p>user:${todo.userId}</p>
            
            `
            //appendChild
            todoContainer.appendChild(div);
    }
}
loadTodos();