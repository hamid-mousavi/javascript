let $ = document
let weightElem = $.getElementById('weight')
let heightElem = $.getElementById('height')
let heightVal = $.getElementById('height-val')
let weightVal = $.getElementById('weight-val')
let result = $.getElementById('result')
let category = $.getElementById('category')
weightElem.addEventListener('change',changeWeight)
let val = 0

function changeWeight(){
    // val = weightElem.value
   // console.log(val)
}
function calculate(){
    let height = heightElem.value/100
    let resultVal = weightElem.value / (height*height)
    resultVal =Math.round((resultVal + Number.EPSILON) * 100) / 100
   weightVal.innerText = weightElem.value + ' kg'
   heightVal.innerText = heightElem.value + ' cm'
   result.innerText = resultVal
   if (resultVal < 18.5){
    category.innerText = 'Thin '
    result.style.color = 'rgb(255, 238, 0)'
   }else if (resultVal >18.5 && resultVal < 24.9){
        category.innerText = 'Normal weight'
        result.style.color = '#0be881'
   } else if (resultVal > 25 && resultVal < 29.9){
        category.innerText = 'Fat '
        result.style.color = 'rgb(255, 0, 212)'
   } else if (resultVal > 30 && resultVal < 39.5){
       category.innerText = 'Very Fat '
       result.style.color = 'rgb(255, 0, 0)'
   } else{

   }
}
