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
const deleteButton = document.getElementById("deleteAll")
const deleteButtonSelected = document.getElementById("deleteSelected")
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

let local = JSON.parse(localStorage.getItem("listToDo"))

let i =0

local.map(x => {    //parseo de los objetos del array localstorage a objetos HTML
    arrThings.push(x)
    
    let newThing = document.createElement("button")
    newThing.classList = "thingToDo"
    newThing.setAttribute("id", `thingToDo${i}`)
    newThing.innerHTML = `<input type="checkbox" name="" class="check" id="select${i}"> <span>${x.name}</span>`
    listThings.appendChild(newThing)
    haveToDo.innerHTML=`You have to do ${arrThings.length} things`
    addEvent(newThing)

    ++i
})



deleteButton.addEventListener("click", ()=>{
    console.log(arrThings)
    listThings.innerHTML = ""
    arrThings = []
    haveToDo.innerHTML=`You have to do ${arrThings.length} things`
    localStorage.setItem(`listToDo`, JSON.stringify(arrThings))

})

deleteButtonSelected.addEventListener("click", ()=>{
    arrDeleteFor = [...document.getElementsByClassName("check")] //creo un array con todos los checkbox
    arrDeleteDef = []
    let index = 0;  //comienzo un cotador ya que el checkbox esta contendio en su padre y por lo tanto el index es el mismo para los dos
    arrDeleteFor.map(x => {
        if(x.checked){
            x.parentNode.remove()  //elimino al padre visualmente
            arrDeleteDef.push(x)
            arrThings.splice(index,1)   //elimino al padre del array sabiendo el index del hijo
            haveToDo.innerHTML=`You have to do ${arrThings.length} things`
            localStorage.setItem(`listToDo`, JSON.stringify(arrThings))
        }
        ++index
    })

})




submit.addEventListener("click", ()=>{
    
    const nuevaCosa = new Thing(inputSearch.value, "estoEsunaDescripciónDeUnaCosa")  //creamos objeto
    arrThings.push(nuevaCosa)                                                        //añadimos en la array
    let newThing = document.createElement("button")                                  //creamos el boton que rellenaremos
    newThing.classList = "thingToDo"                                                 //Le damos la clase que queremos para el estilo
    newThing.setAttribute("id", `thingToDo${i}`)                                     //Atributo único 
    newThing.innerHTML = `<input type="checkbox" name="" class="check" id="select${i}"> <span>${nuevaCosa.name}</span>`  //Rellenamos el boton con los valores de la tarea
    listThings.appendChild(newThing)                                                   //Colgamos el boton del padre(lista) 
    inputSearch.value = ""                                                              //vaciamos el valor de la barra de búsqueda
    haveToDo.innerText=`You have to do ${arrThings.length} things`                      //actualizamos el numero de tareas
    addEvent(newThing)                                                                  //le añadimos la funcionalidad del checkbox
    localStorage.setItem(`listToDo`, JSON.stringify(arrThings))                         //actualizo el array en el localstorage
    console.log(local[0])                                           
    ++i;
})

inputSearch.addEventListener("keydown", (e)=>{  //añadimos un evento keydown al input-search, si esa tecla que se presiona es enter creamos el objeto, lo metemos en el array y seteamos el array en el localstorage por que se va a recarga la página
    if(e.code === 'Enter'){
        const nuevaCosa = new Thing(inputSearch.value, "estoEsunaDescripciónDeUnaCosa")
        arrThings.push(nuevaCosa)
        localStorage.setItem(`listToDo`, JSON.stringify(arrThings))
    }
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