import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas del 02-template-string', () => {

    test('getSaludo debe retornar hola Ismael', () => {
        const nombre = ' Fernando';
        const saludo = getSaludo(nombre);
        expect ( saludo ).toBe('Hola ' + nombre)
    })

    test('geSaludo debe de retornar Hola Carlos, si no hay argumento', () => {
        const saludo = getSaludo();
        expect (saludo).toBe('Hola Carlos');
    })
})