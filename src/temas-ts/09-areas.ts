//area de un rectangulo, cuadrado y circulo (una sola clase)

class Areas{
    protected lado1 : number;
    protected lado2 : number;
    protected radio : number;

    constructor(lado1:number, lado2:number, radio:number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.radio = radio;
    }

    areaRectangulo():number{
        return this.lado1 * this.lado2;
    }

    areaCuadrado():number{
        return this.lado1 * this.lado2;
    }

    areaCilindro():number{
        return (3.141516) * ((this.radio) ** 2);
    }

    
    imprimir(){
        console.log(`Area de la base del prisma: ${this.areaRecutangulo()}`);
        console.log(`Area de la base de la piramide: ${this.areaCuadrado()}`);
        console.log(`Area de la base del cilindro: ${(this.areaCirculo()}`);
    }
    
}

//const area = new Areas(5,5,5);
//area.imprimir();

/*
const datosRectangulo = new Areas(5,8,0);
datosRectangulo.imprimirRectangulo();

const datosCuadrado = new Areas(5,5,0);
datosCuadrado.imprimirCuadrado();

const datosCirculo = new Areas(0,0,5);
datosCirculo.imprimirCirculo();
*/
