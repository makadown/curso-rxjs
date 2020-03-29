/* ejecicio con operador distinct */

import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of<number | string>(1,'1',1,3,3,2,2,4,4,5,3,'1');

numeros$.pipe(
    distinct()
)
.subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Dr Wily'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];


// con interfaces y clases se necesita proporcionar al distinct el predicado
from(personajes).pipe(
    distinct( p => p.nombre)
    ).subscribe(console.log);