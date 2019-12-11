import { asyncScheduler } from 'rxjs';

/* asyncScheduler es parecido a tener un setTimeout pero con suscripcion */
// setTimeout(() => { }, 3000);
// setInterval(() => { }, 3000);

/*
const saludar = () => console.log('Hola mundo');
asyncScheduler.schedule( saludar, 1000 ); */

/*
const saludar2 =  nombre => console.log(`Hola ${ nombre }`);
asyncScheduler.schedule( saludar2, 1000, 'Mayito' ); */

/*
// Para enviar mas parametros, solo usar un objeto, algo como esto:
const saludar3 =   ( { nombre, apellido } ) => console.log(`Hola ${ nombre } ${apellido}`);
asyncScheduler.schedule( saludar3, 1000, { nombre: 'Mayito', apellido: 'Serrano'} ); 
*/

/*  */
// para usar un intervalo con asyncScheduler, NO USAR FUNCION DE FLECHA!
const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state)

    this.schedule( state + 1, 1000 );

}, 3000, 0); // el 0 seria el que pasa como state.

/*
setTimeout( () => {
    subs.unsubscribe();
}, 6000);
*/

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );