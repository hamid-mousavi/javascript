let addBtn = document.getElementById('add_btn')
let todoForm = document.getElementById('todo_form')
let todoSubmit = document.getElementById('todo_submit')
let todoInput = document.getElementById('todo_input')
let noStatues = document.getElementById('no_status')
let statuesElem = document.querySelectorAll('.status')
let closeModal = document.querySelector('.close-modal')
let i = 0
// on click add todo button show the modal form
addBtn.addEventListener('click',showModal)
function showModal(){
   // todoForm.style.position = 'relative'
   todoForm.style.display = 'block'
    todoSubmit.addEventListener('click',addTodo)
    todoInput.addEventListener('keyup',function(event){
        if(event.key == 'Enter' && todoInput.value != ''){
            addTodo()
        }
        else{

        }
    })
}

// this function create div element and add the div in modal form to the div (no status)
function addTodo(){    
    let val = todoInput.value
    let divElem = document.createElement('div')
    let spanElem = document.createElement('span')
    divElem.draggable = 'true'
    divElem.className = 'todo'
    divElem.id='myId'+ i
    ++i
    divElem.innerText= val
    spanElem.className = 'close'
    spanElem.innerText ='×'
    divElem.append(spanElem)
    todoForm.style.display = 'none'
    noStatues.append(divElem)
    spanElem.addEventListener('click', function(event){
    event.target.parentElement.remove()
    })
    divElem.addEventListener('dragstart',dragStart)
    todoInput.value = ''
    
}

//when drag start 
function dragStart(event){
    event.dataTransfer.setData('idElem',event.target.id)
   
}
//when drag droped
statuesElem.forEach(function(elem){
    elem.addEventListener('dragover',function(event){
        event.preventDefault()
    })
    elem.addEventListener('drop', function(event){
        let targetId = event.dataTransfer.getData('idElem')
        let tr = document.getElementById(targetId)
        elem.append(tr)
        
        
    })
})

// when click the close modal
closeModal.addEventListener('click',function(){
    todoForm.style.display = 'none'
    todoInput.value = ''
})