/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package main.ejemplo4;

import java.io.StringReader;

/**
 *
 * @author Pc
 */
public class Ejemplo4 {

     public static void main(String[] args) {
        String texto=" Public void  $%  Metodo1(int j, char c){\n print(\"hola mundo\"); \n Int x=5;\n }  ";
        try {
        Analizadores.parser parse;
        parse = new Analizadores.parser( new Analizadores.Lexico(new StringReader( texto)));
        
            parse.parse();
        } catch (Exception ex) {
           
        }
        
    }
}
