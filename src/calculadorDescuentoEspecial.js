function calcularDescuentoEspecial(neto, categoria, cliente)
{
    if(neto > 3000 && categoria === "Alimentos" && cliente === "recurrente"){
        return 100;
    }
    else if (neto > 7000 && categoria === "Electronicos" && cliente === "especial"){
        return 200;
    }
}

export default calcularDescuentoEspecial;