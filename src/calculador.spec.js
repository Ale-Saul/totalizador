import calcular from "./calculador.js";

describe("calcular", () => {
  it("deberia calcular el precio neto de precio 100 y unidades 500", () => {
    expect(calcular(100, 500, "", "", 0, "")).toEqual(42500);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de CA", () => {
    expect(calcular(100, 500, "CA", "", 0, "")).toEqual(46625);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de UT", () => {
    expect(calcular(100, 500, "UT", "", 0, "")).toEqual(45825);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de NV", () => {
    expect(calcular(10, 50, "NV", "", 0, "")).toEqual(540);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de   TX", () => {
    expect(calcular(10, 50, "TX", "", 0, "")).toEqual(531.25);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de AL", () => {
    expect(calcular(10, 50, "AL", "", 0, "")).toEqual(520);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 100 con un descuento de 3%", () => {
    expect(calcular(10, 100, "", "", 0, "")).toEqual(970);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 300 con un descuento de 5%", () => {
    expect(calcular(10, 300, "", "", 0, "")).toEqual(2850);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 700 con un descuento de 7%", () => {
    expect(calcular(10, 700, "", "", 0, "")).toEqual(6510);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 10%", () => {
    expect(calcular(10, 1000, "", "", 0, "")).toEqual(9000);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 3000 con un descuento de 15%", () => {
    expect(calcular(10, 3000, "", "", 0, "")).toEqual(25500);
  });
  it("deberia calcular el precio neto con descuento y impuesto de varios que es 0%", () => {
    expect(calcular(10, 200, "", "Varios", 0, "")).toEqual(1940);
  });
  it("deberia calcular el precio neto con descuento  de alimentos que es 2%", () => {
    expect(calcular(10, 200, "", "Alimentos", 0, "")).toEqual(1900);
  });
  it("deberia calcular el precio neto con impuesto de bebidas alcoholicas que es 7%", () => {
    expect(calcular(10, 200, "", "Bebidas alcoholicas", 0, "")).toEqual(2080);
  });
  it("deberia calcular el precio neto con descuento de material de escritorio que es 1.5%", () => {
    expect(calcular(10, 200, "", "Material de escritorio", 0, "")).toEqual(1910);
  });
  it("deberia calcular el precio neto con impuesto de muebles que es 3%", () => {
    expect(calcular(10, 200, "", "Muebles", 0, "")).toEqual(2000);
  });
  it("deberia calcular el precio neto con descuento y impuesto de varios que es 1% y 4%", () => {
    expect(calcular(10, 200, "", "Electronicos", 0, "")).toEqual(2000);
  });
  it("deberia calcular el precio neto con impuesto de varios que es 2%", () => {
    expect(calcular(10, 200, "", "Vestimenta", 0, "")).toEqual(1980);
  });
});