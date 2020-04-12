import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    // espera a que el usuario deje de escribir por 500 ms
    debounceTime(500),
    pluck('target', 'value'),
    // genera un observable (con el getJSON)
    map( texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    // se va a suscribir al observable
    mergeAll(),
    pluck('items')
).subscribe( resp => {
    console.log(resp); 
});


