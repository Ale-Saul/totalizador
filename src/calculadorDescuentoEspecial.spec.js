import calcularDescuentoEspecial from './calculadorDescuentoEspecial';

describe('calculadorDescuentoEspecial', function() {
    it('debería retornar 100 si el neto es mayor a 3000, la categoria es Alimentos y el cliente es recurrente', function() {
        expect(calcularDescuentoEspecial(4000, "Alimentos", "recurrente")).toEqual(100);
    });
    it('debería retornar 200 si el neto es mayor a 7000, la categoria es Electronicos y el cliente es especial', function() {
        expect(calcularDescuentoEspecial(8000, "Electronicos", "especial")).toEqual(200);
    });
});
