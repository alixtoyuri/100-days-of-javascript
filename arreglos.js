let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    ['x', 'Megaman', 'Zero', 'Dr.Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

//console.log (arregloCosas[4]);


/*
Referencia al arreglo arregloCosas
El elemento que se encuentra en la posición 4
Dentro de ese elemento que se encuentra en la posición 4, quiero 
el elemento que se encuentra en la posición 3
*/
console.log (arregloCosas[4] [3]);

console.log (arregloCosas[4] [3] [1]);
