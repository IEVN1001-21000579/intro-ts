//area de un rectangulo, cuadrado y circulo (una sola clase)

class Areas{
    protected base : number;
    protected altura : number;
    protected radio : number;
    //protected area : number;

    constructor(base:number, altura:number, radio:number){
        this.base = base;
        this.altura = altura;
        this.radio = radio;
        //this.area = area;
    }
    
    imprimir(){
        let mensaje: string = `
        Base del Rectangulo: ${this.base}, altura: ${this.altura}, area: ${this.altura*this.base}
        Base del Cuadrado: ${this.base}, altura: ${this.altura}, area: ${this.altura*this.base}
        Radio del circulo ${this.radio}, area: ${3.141516 * ((this.radio)**2)}`;
        console.log(mensaje);

        //console.log(`Base del Rectangulo: ${this.base}, altura: ${this.altura}, area: ${this.altura*this.base}`);
    }

    /*
    imprimirCuadrado(){
        console.log(`Base del Cuadrado: ${this.base}, altura: ${this.altura}, area: ${this.altura*this.base}`);
    }
    imprimirCirculo(){
        console.log(`Radio del circulo ${this.radio}, area: ${3.141516 * ((this.radio)**2)}`);
    }
    */

    /*
    areaRyC(){
        this.base * this.altura;
    }

    areaCirculo(){
        3.141516 * ((this.radio)**2)
    }
    */
}

const area = new Areas(5,5,5);
area.imprimir();

/*
const datosRectangulo = new Areas(5,8,0);
datosRectangulo.imprimirRectangulo();

const datosCuadrado = new Areas(5,5,0);
datosCuadrado.imprimirCuadrado();

const datosCirculo = new Areas(0,0,5);
datosCirculo.imprimirCirculo();
*/