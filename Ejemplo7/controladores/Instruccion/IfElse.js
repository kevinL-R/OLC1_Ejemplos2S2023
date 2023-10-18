const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");

function SentenciaIfElse(_instruccion, _ambito) {
    var mensaje = ""
    var operacion = Operacion(_instruccion.expresion, _ambito);
    //console.log(operacion)
    if (operacion.tipo === TIPO_DATO.BOOL) {
        //console.log(operacion)
        if (operacion.valor) {
            var nuevoAmbito = new Ambito(_ambito, "If")
            const Bloque = require("./Bloque");
            var ejec = Bloque(_instruccion.instruccionesIf, nuevoAmbito)
            mensaje += ejec.cadena

        }
        else {
            var nuevoAmbito = new Ambito(_ambito, "Else")
            const Bloque = require("./Bloque");
            var ejec = Bloque(_instruccion.instruccionesElse, nuevoAmbito)
            mensaje += ejec.cadena

        }
        return {

            cadena: mensaje
        }
    }
    return {
        cadena: `Error: No es una condicion válida para el if... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
    }
}

module.exports = SentenciaIfElse