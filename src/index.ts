import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';

/* range(1,10).pipe(
    filter(  val => val % 2 === 1 )
).subscribe(console.log); */
/*
range(20, 30).pipe(
    filter( (val, i) => {
        console.log('index ', i);
        return val % 2 === 1;
    })
).subscribe(console.log);*/

interface Personaje {
    tipo: string;
    nombre: string;
};

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

from(personajes).pipe(
    filter(  p => p.tipo === 'heroe')
).subscribe(console.log); 