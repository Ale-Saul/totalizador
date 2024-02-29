import calcular from "./calculador.js";

describe("calcular", () => {
  it("deberia calular el precio neto de precio 100 y unidades 500", () => {
    expect(calcular(100, 500)).toEqual(50000);
  });
});