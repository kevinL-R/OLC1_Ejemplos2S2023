//definir analisis lexico

%lex

%options case-insensitive

%%

"Evaluar"   return 'EVALUAR'; 
";"         return 'PTCOMA';
"("         return 'PARIZQ';
")"         return 'PARDER';
"["         return 'CORIZQ';
"]"         return 'CORDER';

"+"         return 'MAS';
"-"         return 'MENOS';
"*"         return 'POR';
"/"         return 'DIV';

/* Espacios en blanco */
[ \r\t]+			{}
\n					{}

[0-9]+("."[0-9]+)?\b  	return 'DECIMAL';  
[0-9]+\b				return 'ENTERO';

<<EOF>>				return 'EOF';
. {console.eror("Error lexico: " + yytext);}

/lex

//definir analisis sintactico

%left 'MAS' 'MENOS'   //1-2    "-"
%left 'POR' 'DIV'
%left  UMENOS  // -1 -2  "-"

%start ini

%% 
//gramatica
ini: instrucciones EOF {console.log("Analisis sintactico correcto");}

;

instrucciones: instruccion instrucciones
            | instruccion

            ;

instruccion: EVALUAR CORIZQ expresion CORDER PTCOMA
                {console.log('evaluacion de la expresion: ' + $3) }
            ;

expresion: expresion MAS expresion {$$ =$1+$3 }
            | expresion MENOS expresion {$$ =$1-$3 }
            | expresion POR expresion {$$ =$1*$3 }
            | expresion DIV expresion {$$ =$1/$3 }
            | PARIZQ expresion PARDER {$$ = $2}
            | ENTERO {$$ = Number($1)}
            | DECIMAL {$$ = Number($1)}
            | MENOS expresion %prec UMENOS {$$ = -$2}   // -1   -2 
;