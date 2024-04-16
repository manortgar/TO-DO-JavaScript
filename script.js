/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const submit =  document.getElementById("submit")
const listThings = document.getElementById("things")
const thing = document.getElementById("thingToDo")
const haveToDo = document.getElementById("haveToDo")
//const check = document.getElementById("select")
const deleteButton = document.getElementById("delete")
const inputSearch = document.getElementById("input-search")


let arrThings = []

class Thing {
    constructor(
    name,
    description)
    {
        this.name = name;
        this.description = description; 
    }
}

console.log(arrThings)

haveToDo.innerHTML=`You have to do ${arrThings.length} things`






// thing.addEventListener("click", ()=>{

//     if(check.checked == false){
//         check.checked = true
//         thing.style.textDecoration = "line-through"  //si el estado del checkbox es falso al pulsar el boton de thing cambiará su estado.
//     }else{
//         check.checked = false
//         thing.style.textDecoration = ""  //si el estado del checkbox es falso al pulsar el boton de thing cambiará su estado.

//     }
//     console.log(check.checked)

// })

deleteButton.addEventListener("click", ()=>{
    console.log(arrThings)
    listThings.innerHTML = ""
    arrThings = []
    haveToDo.innerHTML=`You have to do ${arrThings.length} things`


})



let i = 0;
submit.addEventListener("click", ()=>{
    
    const nuevaCosa = new Thing(inputSearch.value, "estoEsunaDescripciónDeUnaCosa")
    arrThings.push(nuevaCosa)
    let newThing = document.createElement("button")
    newThing.classList = "thingToDo"
    newThing.setAttribute("id", "thingToDo")
    newThing.innerHTML = `<input type="checkbox" name="" class="check" id="select${i}"> <span>${nuevaCosa.name}</span>`
    listThings.appendChild(newThing)
    inputSearch.value = ""
    haveToDo.innerHTML=`You have to do ${arrThings.length} things`
    const thingClass = document.getElementsByClassName("thingToDo")
    arrayDeCosas = [...thingClass]
    arrayDeCosas.forEach((x,index) => addEvent(x))
    ++i;
})


function addEvent(x){
    
const check = x.firstChild

    x.addEventListener("click", ()=>{

        if(check.checked == false){
            check.checked = true
            x.style.textDecoration = "line-through"  //si el estado del checkbox es falso al pulsar el boton de thing cambiará su estado.
        }else{
            check.checked = false
            x.style.textDecoration = ""  //si el estado del checkbox es falso al pulsar el boton de thing cambiará su estado.
    
        }
        console.log(check.checked)
    
    })
}