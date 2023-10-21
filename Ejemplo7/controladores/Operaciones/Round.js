const TIPO_DATO = require("../Enums/TipoDato");


function Round(_expresion, _ambito){
    const Aritmetica = require("./Aritmetica");
    const tipovalor = Aritmetica(_expresion.valor, _ambito).tipo

    if( tipovalor===TIPO_DATO.DECIMAL|| tipovalor===TIPO_DATO.ENTERO ){
        const resultado = Math.round(Number(Aritmetica(_expresion.valor,_ambito).valor));
        return{
            valor: resultado,
            tipo: tipovalor,
            linea: _expresion.linea,
            columna:_expresion.columna
        }
    }else{
        return{
            valor: 'Error semantico: no se puede realizar el Round: Linea: '+ _expresion.linea+" Columna: "+ _expresion.columna,
            tipo: Aritmetica(_expresion.valor).tipo,
            linea: _expresion.linea,
            columna:  _expresion.columna
            }
    }

}
module.exports= Round