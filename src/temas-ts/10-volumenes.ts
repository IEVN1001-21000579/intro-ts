import { Areas } from "./09-areas.ts";

class Volumenes extends Areas{
    private altura : number;
    constructor(lado1:number, lado2:number, radio:number, altura:number){
        super(lado1, lado2, radio);
        this.altura = altura;
    }

    imprimir():void{
        //super.imprimir();
        console.log(`Volumen del prisma: ${(this.lado1 * this.lado2) * this.altura}`);
        console.log(`Volumen de la piramide: ${((this.lado1 * this.lado2) * this.altura) / 3}`);
        console.log(`Volumen del cilindro: ${(((3.141516) * (this.radio ** 2)) * this.altura)}`);
    }
}

const areas = new Areas(5,5,5);
areas.imprimir();

const volumenes = new Volumenes(5,5,5,5);
volumenes.imprimir();
