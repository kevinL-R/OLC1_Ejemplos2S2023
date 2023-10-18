const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")


class Graficador {

    constructor(_raiz) {
        this.grafo=""
        this.raiz = _raiz
        this.contador = 0

    }

    graficar(){
        this.grafo="digraph G {\n"
        this.grafo += "node[shape=\"box\"]"
        this.grafo += "Nodo0[label=\"RAIZ\"];\n"
        this.contador = 1
        this.recorrerAST("Nodo0", this.raiz)
        this.grafo += "}"
        return this.grafo
    }

    recorrerAST(_padre, _hijo){  //ambito global
        _hijo.forEach(instruccion => {
            if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DECLARACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarDeclaracion(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.MAIN) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"MAIN\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarMain(instruccion, nombreHijo)

            }else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"ASIGNACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarAsignacion(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.DEC_METODO) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DEC_METODO\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarMetodo(instruccion, nombreHijo)
            } 

        });
    }
    recorrerInstrucciones(_padre, _hijo){  //bloques
        _hijo.forEach(instruccion => {
            if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DECLARACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarDeclaracion(instruccion, nombreHijo)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"ASIGNACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarAsignacion(instruccion, nombreHijo)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.PRINT){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"PRINT\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarOperacion(instruccion.expresion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.IF) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"IF\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarIf(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.IFCE) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"IFCE\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarIFCE(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.IFCEIF) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"IFCEIF\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarIFCEIF(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.WHILE) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"WHILE\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarWhile(instruccion, nombreHijo)
            }
            
        });
    }
    graficarDeclaracion(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"TIPO \n ${_instruccion.tipo_dato}\"];\n`;
        this.grafo += _padre + `->` + tipoVar + `;\n`;
        this.contador++;
        var nombreVar = `Nodo${this.contador}`
        this.grafo += nombreVar + `[label=\"ID \n ${_instruccion.id}\"];\n`;
        this.grafo += _padre + `->` + nombreVar + `;\n`;
        this.contador++;
        if(_instruccion.valor != null){
            this.graficarOperacion(_instruccion.valor, _padre)
        }
    }
    graficarOperacion(_expresion, _padre){
        if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR){
            var exp = _expresion.valor.toString()
            exp = exp.replace(/\"/gi, '\\\"') // \"  ""   mete comillas dobles sin problemas
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${exp}\"];\n`;
            this.grafo += _padre + `->` + value + `;\n`;
            this.contador++;
           
        }else if (_expresion.tipo === TIPO_OPERACION.SUMA || _expresion.tipo === TIPO_OPERACION.IGUALIGUAL|| _expresion.tipo === TIPO_OPERACION.OR || _expresion.tipo === TIPO_OPERACION.MENOR){
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${this.getSimbolo(_expresion.tipo)}\"];\n`;
            this.grafo += _padre + `->` + value + `;\n`;
            this.contador++;
            this.graficarOperacion(_expresion.opIzq, value)
            this.graficarOperacion(_expresion.opDer, value)
        }else if (_expresion.tipo === TIPO_OPERACION.UNARIA) {
            //console.log("entro aca")
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${this.getSimbolo(_expresion.tipo)}\"];\n`;
            this.grafo += _padre + "->" + value + ";\n"
            this.contador++;
            this.graficarOperacion(_expresion.opDer, value)
        }else if(_expresion.tipo_dato === TIPO_INSTRUCCION.ACCESO_VECTORES){
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo_dato}\"];\n`;
            this.grafo += _padre + "->" + value + ";\n"
            this.contador++;
            var value2 = `Nodo${this.contador}`;
            this.grafo += value2 + `[label=\"IDENTIFICADOR ${_expresion.id}\"];\n`;
            this.grafo += value + "->" + value2 + ";\n"
            this.contador++;
            var indice = `Nodo${this.contador}`;
            this.grafo += indice + `[label=\"INDICE \"];\n`;
            this.grafo += value + "->" + indice + ";\n"
            this.contador++;
            this.graficarOperacion(_expresion.indice, indice)
        }
    }
    getSimbolo(_tipo) {
        switch (_tipo) {
            case TIPO_OPERACION.SUMA:

                return '+'
            case TIPO_OPERACION.UNARIA:

                return '-'
            case TIPO_OPERACION.IGUALIGUAL:

                return '=='
            case TIPO_OPERACION.OR:

                return '||'
            case TIPO_OPERACION.MENOR:

                return '<'
        }
    }    
    graficarMain(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"LLAMADA \n ${_instruccion.nombre}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        if (_instruccion.lista_valores != null) { 
            var parametro = `Nodo${this.contador}`
            this.grafo += parametro + `[label=\"PARAMETROS\"];\n`;  //hola(1,2,3)
            this.grafo += _padre + "->" + parametro + ";\n"
            this.contador++;
            for (let i = 0; i < _instruccion.lista_valores.length; i++) {
                this.graficarOperacion(_instruccion.lista_valores[i], parametro)
            }
        }
    }
    graficarAsignacion(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"IDENTIFICADOR \n ${_instruccion.id}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        this.graficarOperacion(_instruccion.expresion, _padre)

    }
    graficarMetodo(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"IDENTIFICADOR \n ${_instruccion.nombre}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        if (_instruccion.lista_parametros != null) {
            var parametro = `Nodo${this.contador}`
            this.grafo += parametro + `[label=\"PARAMETROS\"];\n`;
            this.grafo += _padre + "->" + parametro + ";\n"
            this.contador++;
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                this.graficarDeclaracion(_instruccion.lista_parametros[i], parametro)  //hola(int a, int b)
            }
        }
        var instruccion = `Nodo${this.contador}`
        this.grafo += instruccion + `[label=\"INSTRUCCIONES\"];\n`;
        this.grafo += _padre + "->" + instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(instruccion,_instruccion.instrucciones)
    }
    graficarIf(_instruccion, _padre) {
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"EXPRESION\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        this.graficarOperacion(_instruccion.expresion, tipoVar)
        var Instruccion = `Nodo${this.contador}`
        this.grafo += Instruccion + `[label=\"INSTRUCCIONES\"];\n`;
        this.grafo += _padre + "->" + Instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(Instruccion, _instruccion.instrucciones)
    }
    graficarIFCE(_instruccion, _padre) {
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"EXPRESION\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        this.graficarOperacion(_instruccion.expresion, tipoVar)
        var Instruccion = `Nodo${this.contador}`
        this.grafo += Instruccion + `[label=\"INSTRUCCIONES-IF\"];\n`;
        this.grafo += _padre + "->" + Instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(Instruccion, _instruccion.instruccionesIf)
        var ELSE = `Nodo${this.contador}`
        this.grafo += ELSE + `[label=\"ELSE\"];\n`;
        this.grafo += _padre + "->" + ELSE + ";\n"
        this.contador++;
        var Instruccion2 = `Nodo${this.contador}`
        this.grafo += Instruccion2 + `[label=\"INSTRUCCIONES-ELSE\"];\n`;
        this.grafo += ELSE + "->" + Instruccion2 + ";\n"
        this.contador++;
        this.recorrerInstrucciones(Instruccion2, _instruccion.instruccionesElse)
    }
    graficarIFCEIF(_instruccion, _padre) {
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"EXPRESION\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        this.graficarOperacion(_instruccion.expresion, tipoVar)
        var Instruccion = `Nodo${this.contador}`
        this.grafo += Instruccion + `[label=\"INSTRUCCIONES-IF\"];\n`;
        this.grafo += _padre + "->" + Instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(Instruccion, _instruccion.instruccionesIf)

        for (let i = 0; i < _instruccion.lista_elseif.length; i++) {
            //console.log(_instruccion.lista_elseif[i])
            var nombreHijo = "Nodo" + this.contador
            this.contador++;
            this.grafo += nombreHijo + "[label=\"ELSE-IF\"];\n"
            this.grafo += _padre + "->" + nombreHijo + ";\n"
            var tipoVar2 = `Nodo${this.contador}`
            this.grafo += tipoVar2 + `[label=\"EXPRESION\"];\n`;
            this.grafo += nombreHijo + "->" + tipoVar2 + ";\n"
            this.contador++;
            this.graficarOperacion(_instruccion.lista_elseif[i].expresion, tipoVar2)
            var Instruccion2 = `Nodo${this.contador}`
            this.grafo += Instruccion2 + `[label=\"INSTRUCCIONES-ELSE-IF\"];\n`;
            this.grafo += nombreHijo + "->" + Instruccion2 + ";\n"
            this.contador++;
            this.recorrerInstrucciones(Instruccion2, _instruccion.lista_elseif[i].instruccionesElseIf)
        }
        if (_instruccion.instruccionesElse != null) {
            var nombreHijo2 = "Nodo" + this.contador
            this.contador++;
            this.grafo += nombreHijo2 + "[label=\"ELSE\"];\n"
            this.grafo += _padre + "->" + nombreHijo2 + ";\n"
            var Instruccion3 = `Nodo${this.contador}`
            this.grafo += Instruccion3 + `[label=\"INSTRUCCIONES-ELSE\"];\n`;
            this.grafo += nombreHijo2 + "->" + Instruccion3 + ";\n"
            this.contador++;
            this.recorrerInstrucciones(Instruccion3, _instruccion.instruccionesElse)
        }
    }
    graficarWhile(_instruccion, _padre) {
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"EXPRESION\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        this.graficarOperacion(_instruccion.expresion, tipoVar)
        var Instruccion = `Nodo${this.contador}`
        this.grafo += Instruccion + `[label=\"INSTRUCCIONES\"];\n`;
        this.grafo += _padre + "->" + Instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(Instruccion, _instruccion.instrucciones)
    }
}
module.exports = Graficador;