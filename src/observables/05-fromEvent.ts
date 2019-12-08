import { fromEvent } from 'rxjs';

/** Eventos del DOM */
const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: (val) => console.log('next', val)
};

/*
src1$.subscribe( (ev) => {
    console.log(ev.x);
    console.log(ev.y);
});*/
/* A partir del codigo de arriba se puede hacer destructuracion 
para solo mostrar ev.x y ev.y como parametros*/
src1$.subscribe( ({x,y}) => {
    console.log(x);
    console.log(y);
});

src2$.subscribe(evento => {
    console.log(evento.key);
});