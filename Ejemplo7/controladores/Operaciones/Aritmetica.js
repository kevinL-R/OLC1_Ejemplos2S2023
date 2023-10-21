const TIPO_DATO = require("../Enums/TipoDato")
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")
const TipoResultado = require("./TipoResultado")
const ValorExpresion = require("./ValorExpresion")  
const Round = require("./Round");
const ToLower = require("./ToLower");
const ToUpper = require("./ToUpper");
const Truncate = require("./Truncate");
const Typeof = require('./TypeOf');
const Length = require("./Length"); 

function Aritmetica(_expresion,_ambito){
    if (_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR || _expresion.tipo === TIPO_INSTRUCCION.LLAMADA_METODO) {
        return ValorExpresion(_expresion, _ambito) 
    }else if (_expresion.tipo === TIPO_OPERACION.SUMA) {
        // console.log("suma")
        return suma(_expresion.opIzq, _expresion.opDer, _ambito)
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
function suma(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) + 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) + 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) + Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) + Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) + Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() + opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 

}
module.exports = Aritmetica