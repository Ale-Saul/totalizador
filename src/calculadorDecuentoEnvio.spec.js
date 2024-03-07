import calcularDescuentoEnvio from "./calculadorDescuentoEnvio";

describe("Calculador de descuento de envío", () => {
    it("deberia calcular el descuento de envío de un cliente normal", () => {
        expect(calcularDescuentoEnvio(100, "normal")).toEqual(0);
    });
    it("deberia calcular el descuento de envío de un cliente recurrente", () => {
        expect(calcularDescuentoEnvio(9, "recurrente")).toEqual(0.045);
    });
    it("deberia calcular el descuento de envío de un cliente antiguo recurrente", () => {
        expect(calcularDescuentoEnvio(9, "antiguo")).toEqual(0.09);
    });
    it("deberia calcular el descuento de envío de un cliente especial", () => {
        expect(calcularDescuentoEnvio(9, "especial")).toEqual(0.135);
    });
});