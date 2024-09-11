class Persona{
    nombre: string;
    edad: number;

    constructor(nombre1: string, edad1: number){
        this.nombre = nombre1;
        this.edad = edad1;
    }

    imprimir():void{
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

let persona1 = new Persona('Isaac', 24);
console.log(persona1);