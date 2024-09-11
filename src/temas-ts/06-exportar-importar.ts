//Exportar e importar módulos

import { calcularIVA2, Producto } from "./05-desestructurar-funciones";

const productosN: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 30000
    },
    {
        desc: 'telefono 2',
        precio: 20000
    },
    {
        desc: 'telefono 3',
        precio: 15000
    }
]

const [total, iva] = calcularIVA2(productosN);
console.log('Total', total);