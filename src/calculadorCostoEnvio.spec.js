import calcularCostoEnvio from './calculadorCostoEnvio';

describe('calculadorCostoEnvio', () => {
    it('deberia calcular el costo de envio de un paquete de 1kg', () => {
        expect(calcularCostoEnvio(1)).toEqual(0);
    });
    it('deberia calcular el costo de envio de un paquete de 11kg', () => {
        expect(calcularCostoEnvio(11)).toEqual(3.5);
    });
    it('deberia calcular el costo de envio de un paquete de 24kg', () => {
        expect(calcularCostoEnvio(24)).toEqual(5);
    });
});