const TIPO_DATO = require("../Enums/TipoDato");
const Aritmetica = require("./Aritmetica");


function Typeof(_expresion, _ambito){
    
    const Operacion = require("./Operacion");
    const tipovalor = Operacion(_expresion.valor, _ambito).tipo
    //console.log(tipovalor)
    if( tipovalor!=null){
        const resultado = tipovalor;
        return{
            valor: resultado,
            tipo: TIPO_DATO.CADENA,
            linea: _expresion.linea,
            columna:_expresion.columna
        }
    }else{
        return{
            valor: 'Error semantico: no se puede realizar el typeof: Linea: '+ _expresion.linea+" Columna: "+ _expresion.columna,
            tipo: Aritmetica(_expresion.valor).tipo,
            linea: _expresion.linea,
            columna:  _expresion.columna
            }
    }

}
module.exports= Typeof