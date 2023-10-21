const TIPO_DATO = require("../Enums/TipoDato");



function Length(_expresion,_ambito){
    
    const Operacion = require("./Operacion")
    const valorR = Operacion(_expresion.valor, _ambito)
    
    
    if(valorR.tipo === TIPO_DATO.CADENA){
            return {
                valor: valorR.valor.length,
                tipo: TIPO_DATO.ENTERO,
                linea: _expresion.linea,
                columna: _expresion.columna
            }
        } else {
            return {
                valor: 'Error semantico: no se puede realizar el Length: Linea: ' + _expresion.linea + " Columna: " + _expresion.columna,
                tipo: null,
                linea: _expresion.linea,
                columna: _expresion.columna
            }
        }
    
}
module.exports=Length