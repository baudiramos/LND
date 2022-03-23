let precioCompra = prompt("Hola, dame por favor un precio de compra: ")

precioFLT = parseFloat(precioCompra);

if (precioFLT >= 0 || precioFLT <= 0) {

        precioFLT = parseFloat(precioCompra);

        precioFLT_Impuestos = (precioFLT * 21)/100 + precioFLT;
        precioFLT_Beneficios = (precioFLT * 15)/100;

        window.alert(`

            El precio que me has dado son ${precioFLT} €

            Los datos de este articulo son: 
                ${precioFLT } - 21 % = ${precioFLT_Impuestos} € (${precioFLT} + 21% de Iva)
                ${ (precioFLT * 21)/100} - 15% =  ${precioFLT_Beneficios} € (${precioFLT} el 15% de Beneficios)
        `)

    } else {
        
        window.alert('El valor que me ha introducido no es válido')

    }