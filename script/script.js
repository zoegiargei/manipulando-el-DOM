/*
 Voy a necesitar una clase constructora Gasto(titulo, categoria, monto) 
 + método restarGastoEnPresupuesto()
 + método mostrarPresupuesto() y un array gastos[] para pushear los gastos y mostrarlos en la app web

 Voy a pedirle al usuario que ingrese por teclado tituloGasto, categoriaGasto y montoGasto
 luego instanciar un objeto const gasto = new Gasto(tituloGasto, categoriaGasto, montoGasto)

 Para mostrar array de objetos en HTML (en la web) hacer:

 1.crear div (con id=divMostrarGastos) vacío en HTML
 2.capturar ID=divMostrarGastos de div vacío:
    const divMostrarGastos = document.getElementById(`divMostrarGastos`)
 3. Ingresar al array gastos[] con forEach, modificar un NODO del html con innerHTML
    (aplicamos método HTML dinámico), mostrar cada propiedad de los objetos gasto del array gastos[]:

    gastos.forEach()(gasto =>{
        divMostrarGastos.innerHTML += `

            <div id="gasto${gasto[indexOf(gasto)]}" class="gastos">
                <p>Título: ${gasto.tituloGasto}</p>
                <p>Categoría: ${gasto.categoriaGasto}</p>
                <p>Monto: ${gasto.montoGasto}</p>
                <p>Fecha: ${gasto.fehcaGasto}</p>
            </div>

            //Esto se llama PLANTILLA DE TEXTO.
            //Puedo usar una plantilla de boostrap
            //Voy a usar CARD de boostrap para mostrar gastos.

        `
    })

 4.Modifico desde el CSS la clase gastos
*/

const gastos = [] //Array de gastos del usuario

let presupuesto = 0
const inputPresupuesto = document.getElementById(`inputPresupuesto`)
const btnEnviarPresu = document.getElementById(`btnEnviarPresu`)

// Cargamos el presupuesto
btnEnviarPresu.addEventListener(`click`, () => {

    presupuesto = 0
    presupuesto = inputPresupuesto.value
    console.log(presupuesto)
    inputPresupuesto.value = null
})



let titulo,categoria,monto=0
const btnEnviarGasto = document.getElementById(`btnEnviarGasto`)

const inputTitulo = document.getElementById(`inputTitulo`)
const inputCategoria = document.getElementById(`inputCategoria`)
const inputMonto = document.getElementById(`inputMonto`)


const divNoCargoPresupuesto = document.getElementById(`divNoCargoPresupuesto`) //no funcion aún

//let tagMensaje, mensaje
let mensaje, mensajeAlerta

//Cargamos gastos del usuario
btnEnviarGasto.addEventListener(`click`, () => {

    if(presupuesto==0){

        if(divNoCargoPresupuesto.hasChildNodes()){
            divNoCargoPresupuesto.removeChild(divNoCargoPresupuesto.lastChild)
        } else{

            mensaje = `No puede ingrear un gasto sin antes cargar el presupuesto`
            mensajeAlerta = document.createTextNode(`${mensaje}`)
            divNoCargoPresupuesto.appendChild(mensajeAlerta)
        }

    } else{

        titulo = inputTitulo.value
        categoria = inputCategoria.value
        monto = inputMonto.value
    
        console.log(titulo,categoria,monto) //prueba
    
    
        const gasto = new Gasto(titulo,categoria,monto,(new Date()).toLocaleDateString())
        gastos.push(gasto)
    
        presupuesto = presupuesto - monto
    
    
        console.log(`Presupuesto: ${presupuesto}`) //prueba
        console.log(gastos) //prueba
    
        inputTitulo.value = null
        inputCategoria.value = null
        inputMonto.value = null
    
        if(divMostrarPresupuesto.hasChildNodes()){
            divMostrarPresupuesto.removeChild(divMostrarPresupuesto.lastChild)
        }
    }

})

const btnMostrarGastos = document.getElementById(`btnMostrarGastos`)
const divMostrarGastos = document.getElementById(`divMostrarGastos`)


btnMostrarGastos.addEventListener(`click`, () => {

    gastos.forEach((gasto) => { //todavía no se bien como hacer para mostrar solo una vez cada gasto
        
        divMostrarGastos.innerHTML += `
        
            <div class="mostrarGastos">
                <p>Título: ${gasto.titulo}</p>
                <p>Categoría: ${gasto.categoria}</p>
                <p>Monto: ${gasto.monto}</p>
                <p>Fecha: ${gasto.fecha}</p>
            </div>

        `
    })

})

const divMostrarPresupuesto = document.getElementById(`divMostrarPresupuesto`)
const btnMostrarPresupuesto = document.getElementById(`btnMostrarPresupuesto`)


btnMostrarPresupuesto.addEventListener(`click`, () => {

    if(divMostrarPresupuesto.hasChildNodes()){
        divMostrarPresupuesto.removeChild(divMostrarPresupuesto.lastChild)
    } else{

        let nuevoPresupuesto = document.createTextNode(`$ ${presupuesto}`)
        divMostrarPresupuesto.appendChild(nuevoPresupuesto)
    }
})
