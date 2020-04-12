import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
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

input$.pipe(
    // espera a que el usuario deje de escribir por 500 ms
    debounceTime<KeyboardEvent>(500),
    // especifico <tipo de entrada, tipo de salida> al pluck
    pluck<KeyboardEvent, string>('target', 'value'),
    // genera un observable (con el getJSON)
    map<string, Observable<GithubUsers>>( texto => ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`)),
    // se va a suscribir al observable
    mergeAll<GithubUsers>(),
    // obtengo el arreglo a partir del nodo 'items'
    pluck<GithubUsers, GithubUser[]>('items')
).subscribe( mostrarUsuarios);


