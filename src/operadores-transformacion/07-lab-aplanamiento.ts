/* mergeMap vs switchMap vs exhaustMap */

import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = ( userPass ) =>  
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of('xxx') )
        ) ;

// creando formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones (auxiliado con https://reqres.in/)
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// prevenir comportamiento de refresh del formulario
const submitForm$ = fromEvent<Event>( form, 'submit' )
                        .pipe(
                            tap( ev => ev.preventDefault() ),
                            map( ev => ({
                                email: ev.target[0].value,
                                password: ev.target[1].value
                            })),
                            exhaustMap(peticionHttpLogin)
                        );
/**
 * Recordatorio:
 * mergeMap - puede tener n suscripciones activas simultaneamente.
 * switchMap - cancela cualquier otra suscripcion/peticion anterior, haciendo una nueva.
 * exhaustMap - ignora cualquier otra suscripcion/peticion si tiene una activa.
 */

submitForm$.subscribe( token => console.log(token) );