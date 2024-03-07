import calcularDescuentoEspecial from './calculadorDescuentoEspecial';

describe('calculadorDescuentoEspecial', function() {
    it('debería retornar 100 si el neto es mayor a 3000, la categoria es Alimentos y el cliente es recurrente', function() {
        expect(calcularDescuentoEspecial(4000, "Alimentos", "recurrente")).toEqual(100);
    });
});
