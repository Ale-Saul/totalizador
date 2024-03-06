import calcular from "./calculador.js";

describe("calcular", () => {
  it("deberia calcular el precio neto de precio 100 y unidades 500", () => {
    expect(calcular(100, 500)).toEqual(50000);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de CA", () => {
    expect(calcular(100, 500, "CA")).toEqual(54125);
  });
  it("deberia calcular el precio neto de precio 100 y unidades 500 con el impuesto de UT", () => {
    expect(calcular(100, 500, "UT")).toEqual(53325);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de NV", () => {
    expect(calcular(10, 50, "NV")).toEqual(540);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de   TX", () => {
    expect(calcular(10, 50, "TX")).toEqual(531.25);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 50 con el impuesto de AL", () => {
    expect(calcular(10, 50, "AL")).toEqual(520);
  });
  it("deberia calcular el precio neto de precio 10 y unidades 1000 con un descuento de 3%", () => {
    expect(calcular(10, 1000, "")).toEqual(9700);
  });
});