class Usuario {
    
    constructor(nombre, apellido, libros, mascotas){
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

    countMascotas(){
        return this.mascotas.length
    }

    addBook(libro){
        this.libros.push(libro)
    }

    getBookNames(){
        return this.libros.map(item => item.nombre)
    }

}

let usuario = new Usuario('Ivan', 'Massenzio',[{nombre:'Libro 1', autor:'Autor 1'}], ['Leia', 'Rambo'])

console.log(usuario.getFullName())

usuario.addMascota('Perla')
console.log(usuario.countMascotas())


usuario.addBook({nombre:'Libro 2', autor:'Autor 2'})
usuario.addBook({nombre:'Libro 3', autor:'Autor 3'})

console.log(usuario.getBookNames())