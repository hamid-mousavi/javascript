let btnSave = document.getElementById('btn-save')
let btnDelete = document.getElementById('btn-delete')
let listElem = document.getElementById('listed')
let inputElem = document.getElementById('input-field')
let colorBox = document.querySelectorAll('.color-box')
let rounded = document.querySelectorAll('.rounded')
function removeElem(event){
    event.target.parentElement.remove()
}  
document.body.addEventListener('keyup',function(event){
    if (event.key=='Enter'){
        save()
        flag = true
    }
})
btnSave.addEventListener('click',save)
btnDelete.addEventListener('click',function(){
    inputElem.value = ''
    inputElem.style= 'background: #fff'
})
function save(){
    
    if  (inputElem.value!= ''){
        let diveElem = document.createElement('div')
    let pElem = document.createElement('p')
    diveElem.setAttribute('class', 'card shadow-sm rounded')
    pElem.setAttribute('class', 'card-text p-3')
    let bg = inputElem.style.background
    diveElem.style.background=bg
    diveElem.setAttribute('onclick','removeElem(event)')
    pElem.innerText=inputElem.value
    diveElem.append(pElem)
    listElem.append(diveElem)
    inputElem.value = ''
    inputElem.style= 'background: #fff'
    } else {

    }
}
colorBox.forEach(function(color){
    color.addEventListener('click',function changeColor(event){
       
        let bg = event.target.style.backgroundColor
        inputElem.style.background= bg
        
    })
})
