let decimal = 27; //Acá ingresamos el decimal a convertir
   	
		
		var resultadoBin = 'El binario es: ' 
    var resultadoHex = 'El hexadecimal es: '
    
    var hexadecimal = decimal.toString(16); //Lo convierte a Base16
		var binario = decimal.toString(2); //Lo convierte a Base2

		
    console.log(decimal)
    console.log(resultadoHex + hexadecimal);
		console.log(resultadoBin + binario);
