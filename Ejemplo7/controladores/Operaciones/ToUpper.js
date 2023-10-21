const TIPO_DATO = require("../Enums/TipoDato");

function ToUpper(_expresion, _ambito){
    const Aritmetica = require("./Aritmetica");
    const tipovalor = Aritmetica(_expresion.valor, _ambito).tipo
    if( tipovalor===TIPO_DATO.CADENA){
        const resultado = (Aritmetica(_expresion.valor,_ambito).valor).toUpperCase();
       
        return{
            valor: resultado,
            tipo: TIPO_DATO.CADENA,
            linea: _expresion.linea,
            columna:_expresion.columna
        }
    }else{

        return{
            valor: 'Error semantico: no se puede realizar el toUpper: Linea: '+ _expresion.linea+" Columna: "+ _expresion.columna,
            tipo: Aritmetica(_expresion.valor).tipo,
            linea: _expresion.linea,
            columna:  _expresion.columna
            }
    }

}
module.exports=ToUpper