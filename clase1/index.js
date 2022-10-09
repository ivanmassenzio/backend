// class Contador {

//     constructor(responsable, cuenta, cuentaGlobal) {
//         this.responsable = responsable
//         this.cuenta = cuenta
//         this.cuentaGlobal = cuentaGlobal
//     }

//     obtenerResponsable() {
//         return console.log('Nombre Responsble: ' +this.responsable)
//     }

//     obtenerCuentaIndividual() {
//         return this.cuenta
//     }

//     obtenerCuentaGlobal() {
//         return this.cuentaGlobal
//     }

//     contar() {
//         this.cuenta++
//         this.cuentaGlobal++
//     }

// }

// let contador = new Contador(responsable='Ivan', cuenta=0, cuentaGlobal=0)

// contador.obtenerResponsable()

// let cuentaIndividual = contador.obtenerCuentaIndividual()
// contador.contar()

// cuentaIndividual = contador.obtenerCuentaIndividual()
// console.log(cuentaIndividual)


class Usuario {
    
    constructor(nombre, apellido, libros=[{}], mascotas=[]){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas  
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    getMascotas(){
        return this.mascotas
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(libro){
        this.libros.push(libro)
    }

    getBookNames(){
        return this.libros
    }

}

let usuario = new Usuario('Ivan', 'Massenzio')

console.log(usuario.getFullName())

usuario.addMascota('Leia')
usuario.addMascota('Perla')
usuario.addMascota('Rambo')
console.log(usuario.getMascotas())
console.log(usuario.countMascotas())


usuario.addBook({nombre:'Libro 1', autor:'Autor 1'})
usuario.addBook({nombre:'Libro 2', autor:'Autor 2'})
usuario.addBook({nombre:'Libro 3', autor:'Autor 3'})

libros = usuario.getBookNames()
let {nombre}  = libros

console.log(nombre)