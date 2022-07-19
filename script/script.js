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

const gastos = []

let presupuesto = 0
const inputPresupuesto = document.getElementById(`inputPresupuesto`)
const btnEnviarPresu = document.getElementById(`btnEnviarPresu`)


btnEnviarPresu.addEventListener(`click`, () => {

    presupuesto = 0
    presupuesto = inputPresupuesto.value
    console.log(presupuesto)
    inputPresupuesto.value = null
})

let titulo,categoria,monto=0,posicion=0
const btnEnviarGasto = document.getElementById(`btnEnviarGasto`)


const inputTitulo = document.getElementById(`inputTitulo`)
const inputCategoria = document.getElementById(`inputCategoria`)
const inputMonto = document.getElementById(`inputMonto`)


const idNoCargoPresupuesto = document.getElementById(`idNoCargoPresupuesto`) //no funcion aún

btnEnviarGasto.addEventListener(`click`, () => {

    titulo = inputTitulo.value
    categoria = inputCategoria.value
    monto = inputMonto.value

    console.log(titulo,categoria,monto) //prueba


    const gasto = new Gasto(titulo,categoria,monto,(new Date()).toLocaleDateString())
    gastos.push(gasto)


    console.log(gastos) //prueba

    inputTitulo.value = null
    inputCategoria.value = null
    inputMonto.value = null

})

const btnMostrarGastos = document.getElementById(`btnMostrarGastos`)
const divMostrarGastos = document.getElementById(`divMostrarGastos`)


btnMostrarGastos.addEventListener(`click`, () => {

    gastos.forEach((gasto) => {
        
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