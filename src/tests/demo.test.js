describe('Pruebas en el archivo demo.text.js', () => {

test('deben de sewr iguales', () => {
    //1. Incializacion

    const mensaje = 'Hola Mundo';

    //2. Estimulo
    const mensaje2 = 'Hola Mundo';

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
    
})

});