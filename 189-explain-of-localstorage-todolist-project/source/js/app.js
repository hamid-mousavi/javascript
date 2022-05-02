let addButton =document.getElementById('addButton')
let itemInput =document.getElementById('itemInput')
let ulElem = document.getElementById('todoList')
let todoList =document.getElementById('todoList')
let clearButton = document.getElementById('clearButton')
let todoListArray = []
itemInput.focus()

// on click on addtolist button
addButton.addEventListener('click',function(){
    addTodoFunction(itemInput.value)
    itemInput.focus()
})

//on click on cleartodolist button
clearButton.addEventListener('click',clearTodoList)

// if onpress ENTER key in input element
itemInput.addEventListener('keyup',function(event){
    let val = itemInput.value
    if(event.key === 'Enter'){
        addTodoFunction(val)
        
    }

})

//this function fo push data in array
function addTodoFunction(val){
    todoObj ={
        id: todoListArray.length + 1,
        title: val,
        statues : true
    }
    todoListArray.push(todoObj)
    setLocalStorageFunction(todoListArray)
    generateElement(todoListArray)
    itemInput.value = ''
    
}

// this function for set items in local storage
function setLocalStorageFunction(todoListArray){
    localStorage.setItem('todos',JSON.stringify(todoListArray))
    todoListArray = JSON.parse(localStorage.getItem('todos'))

}

// this function for add element in DOM
function generateElement(todoListArray){   
    todoList.innerHTML='' 
    todoListArray.forEach(function(todo){
    let newLi = document.createElement('li')
    let newLabel = document.createElement('label')
    let newBtnComplet = document.createElement('button')
    let newBtnDelete = document.createElement('button')
    if (todo.statues){
        newLi.className = 'completed well'
        newBtnComplet.innerText ='Complete'
        
    }else{
        newLi.className = 'uncompleted well'
        newBtnComplet.innerText ='Incomplete'
    }


    newBtnComplet.className = 'btn btn-success'
    newBtnDelete.className = 'btn btn-danger'
    newLabel.innerText = todo.title
    
    newBtnDelete.innerText = 'Delete'
    newLi.append(newLabel,newBtnComplet,newBtnDelete)
    todoList.append(newLi)

    newBtnComplet.addEventListener('click',function(){
    editTodo(todo,newBtnComplet,newLi)    
    setLocalStorageFunction(todoListArray)})
    

    newBtnDelete.addEventListener('click',function(){

        deleteTodo(todo)
        setLocalStorageFunction(todoListArray)
        generateElement(todoListArray)  
    })
    })  
}

// for edit todo (complete or no)
function editTodo(todo,newBtnComplet,newLi){
    if (todo.statues){
        newLi.className = 'uncompleted well'
        newBtnComplet.innerText ='Incomplete'
        todo.statues = false
    }else{
        newLi.className = 'completed well'
        newBtnComplet.innerText ='Complete'
        todo.statues = true
    }
}

// for delete item from todo
function deleteTodo(mytodo){
console.log(todoListArray)
let id = todoListArray.findIndex(function (todo) {
    if (todo.id === mytodo.id){
        return true
    }
    
})
todoListArray.splice(id,1)
}

//for clear all note in todo list
function clearTodoList(){
todoListArray = []
setLocalStorageFunction(todoListArray)
generateElement(todoListArray)  
}

// on reload set item from local storage in array
window.addEventListener('load',function(){
    if (JSON.parse(localStorage.getItem('todos'))){
        todoListArray = JSON.parse(localStorage.getItem('todos'))
        generateElement(todoListArray)
    } else {
        todoListArray = []
    }
    
})

