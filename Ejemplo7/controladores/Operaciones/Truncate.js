
const TIPO_DATO = require("../Enums/TipoDato");

function Truncate(_expresion, _ambito){
    const Aritmetica = require("./Aritmetica");
    const tipovalor = Aritmetica(_expresion.valor, _ambito).tipo
    if( tipovalor===TIPO_DATO.ENTERO || tipovalor===TIPO_DATO.DECIMAL){
        const resultado = parseInt(Aritmetica(_expresion.valor,_ambito).valor);
        return{
            valor: resultado,
            tipo: TIPO_DATO.ENTERO,
            linea: _expresion.linea,
            columna:_expresion.columna
        }
    }else{

        return{
            valor: 'Error semantico: no se puede realizar el truncate: Linea: '+ _expresion.linea+" Columna: "+ _expresion.columna,
            tipo: Aritmetica(_expresion.valor,_ambito).tipo,
            linea: _expresion.linea,
            columna:  _expresion.columna
            }
    }

}
module.exports=Truncate