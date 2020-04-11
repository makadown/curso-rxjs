/* Ejercicio con getJson() */
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// peticion que dura 1 segundo
// const url = 'https://httpbin.org/delay/1';
const url2 = 'https://api.github.com/usxers?per_page=5';
const manejaError = (resp: AjaxError) => {
    console.warn('Error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

/* const obs$ = ajax.getJSON(url2).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url2).pipe(
    catchError(manejaError)
); */

const obs$ = ajax.getJSON(url2);

obs$.pipe(catchError(manejaError)).subscribe({
    next: val => console.log('next: ', val),
    error: err => console.warn('Error en subs: ', err),
    complete: () => console.log('complete')
});
// obs2$.subscribe(data => console.log('data: ', data));