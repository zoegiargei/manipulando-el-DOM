function restarGastoEnPresupuesto(presupuesto, montoGasto){
    presupuesto -= montoGasto
    return presupuesto
}

//3
// Evento del botón mostrar Gastos
/*
function mostrarGastos(gastos){

    
    for(let i=posicion; i<gastos.length ; i++){
        
        divMostrarGastos.innerHTML += `
        
            <div class="mostrarGastos">
                <p>Título: ${gasto.titulo}</p>
                <p>Categoría: ${gasto.categoria}</p>
                <p>Monto: ${gasto.monto}</p>
                <p>Fecha: ${gasto.fecha}</p>
            </div>

        `
    }
    /*

    gastos.forEach((gasto) =>{
        
        divMostrarGastos.innerHTML += `
        
            <div class="mostrarGastos">
                <p>${posicion}</p>
                <p>Título: ${gasto.titulo}</p>
                <p>Categoría: ${gasto.categoria}</p>
                <p>Monto: ${gasto.monto}</p>
                <p>Fecha: ${gasto.fecha}</p>
            </div>

        `
    })
    
}*/