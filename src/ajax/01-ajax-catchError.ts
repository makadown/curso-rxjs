// Ejercicio con ajax de RxJs

import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

 const url = 'https://api.github.com/users?per_page=5';

 const manejaErrores = (response: Response) => {
     if (!response.ok) {
         throw new Error( response.statusText );
     }
     return response;
 };

 const atrapaError = (err: AjaxError) => {
    console.warn('error en: ', err);
    return of([]);
};

 const fetchPromesa = fetch(url);

/*  fetchPromesa
    .then( resp => resp.json() )
    .then( data => console.log('data:', data) )
    .catch( error => console.warn('error', error )); */

/* fetchPromesa
    .then( manejaErrores )
    .then( resp => resp.json() )
    .then( data => console.log('data:', data) )
    .catch( error => console.warn('error', error )); */

    ajax(url)
    .pipe(
        pluck('response'),
        catchError(  atrapaError )
    ).subscribe(console.log);