const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const TIPO_OPERACION = require("../Enums/TipoOperacion");
const TIPO_VALOR = require("../Enums/TipoValor");
const Aritmetica = require("./Aritmetica.js");
const Logica = require("./OpLogica");
const Relacional = require("./Relacional");
const ValorExpresion = require("./ValorExpresion");
const Round = require("./Round");
const ToLower = require("./ToLower");
const ToUpper = require("./ToUpper");
const Truncate = require("./Truncate");
const Typeof = require('./TypeOf');
const Length = require("./Length");



function Operacion(_expresion,_ambito){ 
    if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR){
            return ValorExpresion(_expresion,_ambito);
    }
    else if(_expresion.tipo===TIPO_OPERACION.SUMA){
        return Aritmetica(_expresion,_ambito);
    }else if(_expresion.tipo === TIPO_OPERACION.IGUALIGUAL || _expresion.tipo === TIPO_OPERACION.DIFERENTE ||
        _expresion.tipo === TIPO_OPERACION.MENOR || _expresion.tipo === TIPO_OPERACION.MAYOR||_expresion.tipo === TIPO_OPERACION.MAYORIGUAL
        ||_expresion.tipo === TIPO_OPERACION.MENORIGUAL){
        return Relacional(_expresion, _ambito)
    }else if(_expresion.tipo === TIPO_OPERACION.AND || _expresion.tipo === TIPO_OPERACION.OR || _expresion.tipo === TIPO_OPERACION.NOT){
        return Logica(_expresion, _ambito)
    }
    else if (_expresion.tipo_dato===TIPO_INSTRUCCION.TOLOWER){
        return ToLower(_expresion,_ambito)

    } else if (_expresion.tipo_dato===TIPO_INSTRUCCION.TOUPPER){
        return ToUpper(_expresion,_ambito)
        
    }else if (_expresion.tipo_dato===TIPO_INSTRUCCION.TRUNCATE){
        return Truncate(_expresion,_ambito)

    }
    else if (_expresion.tipo_dato===TIPO_INSTRUCCION.ROUND){
        return Round(_expresion,_ambito)

    }else if (_expresion.tipo_dato===TIPO_INSTRUCCION.TYPEOF){
        return Typeof(_expresion,_ambito)

    }else if (_expresion.tipo_dato===TIPO_INSTRUCCION.LENGTH){
        //console.log(_expresion)
        return Length(_expresion,_ambito)

    }

}
module.exports = Operacion