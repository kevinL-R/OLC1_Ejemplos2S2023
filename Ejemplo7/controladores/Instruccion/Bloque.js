const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Print = require("./Print");
const Asignacion = require("./Asignacion");
const Declaracion = require("./Declaracion");
function Bloque(_instrucciones,_ambito){
    var cadena=""
    
    _instrucciones.forEach(instruccion => {
        if(instruccion.tipo===TIPO_INSTRUCCION.PRINT){
           cadena+=Print(instruccion,_ambito) + "\n"
        }else if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            var mensaje = Declaracion(instruccion, _ambito)

            if (mensaje != null) {
                cadena += mensaje
            }
        } else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
            var mensaje = Asignacion(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }
        
    });
    return {
        cadena:cadena
    }

}
module.exports = Bloque