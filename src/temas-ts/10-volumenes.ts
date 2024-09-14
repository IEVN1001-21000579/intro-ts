import { Areas } from "./09-areas.ts";

class Volumenes extends Areas{
    private altura : number;
    constructor(lado1:number, lado2:number, radio:number, altura:number){
        super(lado1, lado2, radio);
        this.altura = altura;
    }

    volumenPrisma():number{
        return this.areaRectangulo() * this.altura;
    }

    volumenPiramide():number{
        return this.areaCuadrado() * this.altura;
    }

    volumenCilindro():number{
        return this.areaCirculo() * this.altura;
    }

    imprimir():void{
        //super.imprimir();
        console.log(`Volumen del prisma: ${this.volumenPrisma()}`);
        console.log(`Volumen de la piramide: ${this.volumenPiramide()}`);
        console.log(`Volumen del cilindro: ${this.volumenCilindro()}`);
    }
}

const areas = new Areas(5,5,5);
areas.imprimir();

const volumenes = new Volumenes(5,5,5,5);
volumenes.imprimir();
