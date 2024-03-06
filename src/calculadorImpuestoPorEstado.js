function calcularImpuestoPorEstado(neto, estado){
    if (estado == "CA") {
      return neto * 8.25 / 100;
    } 
    else if(estado =="UT"){
      return neto * 6.65 / 100;
    }
    else if(estado =="NV"){
      return neto * 8.00 / 100;
    }
    else if(estado =="TX"){
      return neto * 6.25 / 100;
    }
    else if(estado =="AL"){
      return neto * 4.00 / 100;
    }
    else{
      return 0;
    }
}

export default calcularImpuestoPorEstado;