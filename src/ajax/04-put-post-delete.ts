import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

/* ajax.put(url,
        { id: 1, nombre: 'mario' },
        { 'mi-token': 'ABC123' })
    .subscribe(console.log); */

/*     ajax.delete(url,
        { 'mi-token': 'ABC123' })
    .subscribe(console.log); */

// los metodos delete no aceptan contenido body
ajax({
    url: url,
    method: 'PUT',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'mayito'
    }
}).subscribe(console.log);

