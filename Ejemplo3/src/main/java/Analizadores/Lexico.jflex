package Analizadores;
import java_cup.runtime.*;
%%

%class Lexico
%cupsym sym
%cup 
%public
%unicode
%line 
%column
%ignorecase

%init{ 
    
%init}

%init{ 
    yyline = 1; 
    yychar = 1; 
%init} 
//er
blancos=[ \t\r\n\f]+
comentario=("//".*\n)|("//".*\r)
comentario2=("/" "*"[^\*]* "*""/")
decimales=[0-9]+("."[0-9]+)
cadenas=(\" [^\"]* \")
entero= [0-9]
letras = [a-zA-Z]
identificador = {letras}({letras}|"_"|{entero})*

//reservadas
Rvoid="void" 
RMain="main"
RGB="graficabarras"
RGP="graficapie"
RDG="definirglobales"
REjex="ejex"
RValores="valores"
RTitulo="titulo"
RTituloY="tituloy"
RTituloX="titulox"

//simbolos
pabre="("
pcierra=")"
allave="{"
cllave="}"
igual="="
pcoma=";"
coma=","

%{
    //codigo java
%}

%%

{blancos} {}
{comentario} {}
{comentario2} {}

{Rvoid} {return new Symbol(sym.Rvoid,yycolumn,yyline,yytext());}
{RMain} {return new Symbol(sym.RMain,yycolumn,yyline,yytext());}
{RGB} {return new Symbol(sym.RGB,yycolumn,yyline,yytext());}
{RGP} {return new Symbol(sym.RGP,yycolumn,yyline,yytext());}
{RDG} {return new Symbol(sym.RDG,yycolumn,yyline,yytext());}
{REjex} {return new Symbol(sym.REjex,yycolumn,yyline,yytext());}
{RValores} {return new Symbol(sym.RValores,yycolumn,yyline,yytext());}
{RTitulo} {return new Symbol(sym.RTitulo,yycolumn,yyline,yytext());}
{RTituloY} {return new Symbol(sym.RTituloY,yycolumn,yyline,yytext());}
{RTituloX} {return new Symbol(sym.RTituloX,yycolumn,yyline,yytext());}


{decimales} {return new Symbol(sym.decimales,yycolumn,yyline,yytext());}
{cadenas} {return new Symbol(sym.cadenas,yycolumn,yyline,yytext());}
{identificador} {return new Symbol(sym.id,yycolumn,yyline,yytext());}

{pabre} {return new Symbol(sym.pabre,yycolumn,yyline,yytext());}
{igual} {return new Symbol(sym.igual,yycolumn,yyline,yytext());}
{pcoma} {return new Symbol(sym.pcoma,yycolumn,yyline,yytext());}
{pcierra} {return new Symbol(sym.pcierra,yycolumn,yyline,yytext());}
{allave} {return new Symbol(sym.allave,yycolumn,yyline,yytext());}
{cllave} {return new Symbol(sym.cllave,yycolumn,yyline,yytext());}
{coma} {return new Symbol(sym.coma,yycolumn,yyline,yytext());}