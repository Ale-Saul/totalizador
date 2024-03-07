import calcularCostoEnvio from './calculadorCostoEnvio';

describe('calculadorCostoEnvio', () => {
    it('deberia calcular el costo de envio de un paquete de 1kg', () => {
        expect(calcularCostoEnvio(1)).toEqual(0);
    });
});