import calcularDescuentoEnvio from "./calculadorDescuentoEnvio";

describe("Calculador de descuento de envío", () => {
    it("deberia calcular el descuento de envío de un cliente normal", () => {
        expect(calcularDescuentoEnvio(100, "normal")).toEqual(0);
    });
});