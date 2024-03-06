function calcularImpuestoDescuentoCategoria(neto, categoria){
    var impuesto = 0;
    var descuento = 0;
    if (categoria == "Varios"){
        return impuesto - descuento;
    }
    else if (categoria == "Alimentos"){
        descuento = neto * 2.00 / 100;
        return impuesto - descuento;
    }
    else if (categoria == "Bebidas alcoholicas"){
        impuesto = neto * 7.00 / 100;
        return impuesto - descuento;
    }
    else if (categoria == "Material de escritorio"){
        descuento = neto * 1.50 / 100;
        return impuesto - descuento;
    }
    else if (categoria == "Muebles"){
        impuesto = neto * 3.00 / 100;
        return impuesto - descuento;
    }
    else if (categoria == "Electronicos"){
        impuesto = neto * 4.00 / 100;
        descuento = neto * 1.00 / 100;
        return impuesto - descuento;
    }
    else if (categoria == "Vestimenta"){
        impuesto = neto * 2.00 / 100;
        return impuesto - descuento;
    }
    else {
        return 0;
    }
    
    
}
export default calcularImpuestoDescuentoCategoria;