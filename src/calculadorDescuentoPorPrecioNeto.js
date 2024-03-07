function calcularDescuentoPrecioNeto(neto){
    if (neto < 1000) {
      return 0;
    }
    else if (neto >=1000 && neto < 3000)
    {
      return neto * 0.03;
    }
    else if (neto >=3000 && neto < 7000)
    {
      return neto * 0.05;
    }
    else if (neto >=7000 && neto < 10000)
    {
      return neto * 0.07;
    }
    else if (neto >=10000 && neto < 30000)
    {
      return neto * 0.1;
    }
    else if (neto >=30000)
    {
      return neto * 0.15;
    }
  }

  export default calcularDescuentoPrecioNeto;