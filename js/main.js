let productos = {
    A: 270,
    B: 340,
    C: 390
}
while (confirm("¿Deseas seleccionar un producto?")) {
    let plantilla = "";
   

    for (let i in productos) {
        plantilla += ` ${i}. $${productos[i]}\n`;
        
    }

    let opc = prompt(`Seleccione un producto de la lista:\n${plantilla}`).toUpperCase();
    
    if (opc in productos) { 
        let valorPagar = productos[opc];
        alert(`El producto que selecciono tiene un precio de $${valorPagar}. Para pagar ingrese monedas de $10, $50 y $100. `);
        let pago = 0;
        while(pago<valorPagar){
            // el +prompt es para convertir automaticamente la entrada del usuario a un numero
            pago += +prompt(`Para pagar ingrese el monto, recuerde que la maquina solo recibe monedas de $10, $50 y $100. Has pagado ${pago} aun debes $${valorPagar - pago}`);
            
            
        }
        let resto = pago - valorPagar;
        while(resto>0){
            if(resto>=100){
                resto -= 100
                alert(`Devolviendo moneda de $100 . Te debemos $${resto}`)
                
            }
            else if(resto<100 && resto>=50){
                resto -= 50
                alert(`Devolviendo moneda de $50. Te debemos $${resto}`)
            }
            else if(resto<50){
                resto -= 10
                alert(`Devolviendo moneda de $10. Te debemos $${resto}`)
            }

        }
            
        
      } else {
        alert(`El producto que selecciono no existe :( `);
      }

    

}
