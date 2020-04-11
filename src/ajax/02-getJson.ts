/* Ejercicio con getJson() */
import { ajax } from 'rxjs/ajax';

// peticion que dura 1 segundo
const url = 'https://httpbin.org/delay/1'
const url2 = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON(url, { 
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
 });

obs$.subscribe(data => console.log('data: ', data));