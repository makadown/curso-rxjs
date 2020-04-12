// más ejercicio con mergeMap
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsers } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML = '';
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append( anchor );

        orderList.append(li);
    }
};

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

/** mergeMap consolida la generacion + suscripcion a observable.
 * y nos ahorra escribir un map() + mergeAll() como se muestra
 * el ejercicio operadores-transformacion/01-mergeAll.ts
 *//* 
input$.pipe(
    // espera a que el usuario deje de escribir por 500 ms
    debounceTime<KeyboardEvent>(500),
    // especifico <tipo de entrada, tipo de salida> al pluck
    pluck<KeyboardEvent, string>('target', 'value'),
    // genera un observable (con el getJSON) y se suscribe
    mergeMap<string, Observable<GithubUsers>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`)),
    // obtengo el arreglo a partir del nodo 'items'
    pluck<GithubUsers, GithubUser[]>('items')
).subscribe( mostrarUsuarios);
 */


// esta peticion dura 1 segundo
const url = 'https://httpbin.org/delay/1?arg=';
// en este ejemplo el mergeMap se suscribe a CADA tecleo en el input
/* input$.pipe(
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log); */

// en este ejemplo, durante CADA tecleo, si no se ha terminado la peticion al server remoto,
// ésta se cancela y se vuelve a pedir.
//
input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);