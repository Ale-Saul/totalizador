function calcularDescuentoEspecial(neto, categoria, cliente)
{
    if(neto > 3000 && categoria === "Alimentos" && cliente === "recurrente"){
        return 100;
    }
}

export default calcularDescuentoEspecial;