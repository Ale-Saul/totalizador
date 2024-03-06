import calcular from "./calculador.js";

describe("calcular", () => {
  it("deberia calcular el precio neto de precio 100 y unidades 500", () => {
    expect(calcular(100, 500)).toEqual(50000);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de CA", () => {
    expect(calcular(100, 500, "CA", "")).toEqual(54125);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de UT", () => {
    expect(calcular(100, 500, "UT", "")).toEqual(53325);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de NV", () => {
    expect(calcular(10, 50, "NV", "")).toEqual(540);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de   TX", () => {
    expect(calcular(10, 50, "TX", "")).toEqual(531.25);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de AL", () => {
    expect(calcular(10, 50, "AL", "")).toEqual(520);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 100 con un descuento de 3%", () => {
    expect(calcular(10, 100, "", "")).toEqual(970);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 300 con un descuento de 5%", () => {
    expect(calcular(10, 300, "", "")).toEqual(2850);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 700 con un descuento de 7%", () => {
    expect(calcular(10, 700, "", "")).toEqual(6510);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 10%", () => {
    expect(calcular(10, 1000, "", "")).toEqual(9000);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 3000 con un descuento de 15%", () => {
    expect(calcular(10, 3000, "", "")).toEqual(25500);
  });
  it("deberia calcular el precio neto con descuento y impuesto de varios que es 0%", () => {
    expect(calcular(10, 200, "", "Varios" )).toEqual(2000);
  });
  it("deberia calcular el precio neto con descuento  de alimentos que es 2%", () => {
    expect(calcular(10, 200, "", "Alimentos" )).toEqual(1960);
  });
  it("deberia calcular el precio neto con impuesto de bebidas alcoholicas que es 7%", () => {
    expect(calcular(10, 200, "", "Bebidas alcoholicas" )).toEqual(2140);
  });
  it("deberia calcular el precio neto con descuento de material de escritorio que es 1.5%", () => {
    expect(calcular(10, 200, "", "Material de escritorio" )).toEqual(1970);
  });
  it("deberia calcular el precio neto con impuesto de muebles que es 3%", () => {
    expect(calcular(10, 200, "", "Muebles" )).toEqual(2060);
  });
  it("deberia calcular el precio neto con descuento y impuesto de varios que es 1%y 4%", () => {
    expect(calcular(10, 200, "", "Electronicos" )).toEqual(2060);
  });
  it("deberia calcular el precio neto con impuesto de varios que es 2%", () => {
    expect(calcular(10, 200, "", "Vestimenta" )).toEqual(2040);
  });
});