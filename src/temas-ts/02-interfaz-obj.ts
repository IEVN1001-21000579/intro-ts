interface Alumno{
    nombre:string;
    edad:number;
    apellido:string;
    genero:string;
    calificacion:number;
}

const alumno:Alumno={
    nombre:'cesar',
    apellido:'isaac',
    edad:24,
    genero:'m',
}

console.table(alumno)

let mascotas=['perro','gato','pez'];

console.log(mascotas[1]);
mascotas[1]='nuevo perro';
console.log(mascotas[1]);
mascotas.push('hamster');
console.log(mascotas);

let tem:(string|number)[]=[];

tem.push(11);
tem.push('cesar');

console.log(tem);
