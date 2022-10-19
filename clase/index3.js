// function prueba(param1, param2) {
//     console.log(`parametro 1: ${param1}\nparametro 2: ${param2}`)
// }

// prueba('Primer parametro', 'Segundo parametro')

function sumar(a,b){
    return Number(a)+Number(b)
}

function restar(a,b){
    return Number(a)-Number(b)
}

function multiplicar(a,b){
    return Number(a)*Number(b)
}

function dividir(a,b){
    return Number(a)/Number(b)
}

// const miOperacion = operacion => operacion()

// miOperacion(sumar(1,2))
// miOperacion(restar(1,2))
// miOperacion(multiplicar(1,2))
// miOperacion(dividir(2,1))


// fetch('/miEndpoint')
// .then(function(response){
//     // Aca definimos toda la logica de si esta todo ok
// }).catch(function(error){
//     // Aca definimos toda la logica de error
// })
// .finally(function(response){
//     // Aca definimos si esta todo ok o no
// })

Promise.resolve(20)
.then(x=>x+1)
.then(x=>x*2)
.then(x=>{
    if(x==22) throw 'Error'
    else return 80
})
