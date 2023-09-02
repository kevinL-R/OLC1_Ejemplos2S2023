/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package main.ejemplo3;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;
/**
 *
 * @author Pc
 */
public class Ejemplo3 {

    public static void main(String[] args) {
        String filePath = "src/main/java/main/ejemplo3/archivo.txt"; // Cambia esto a la ruta de tu archivo
        StringBuilder fileContent = new StringBuilder();

        try {
            FileReader fileReader = new FileReader(filePath);
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                fileContent.append(line).append("\n");
            }

            bufferedReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        //System.out.println(fileContent.toString());
        try {
        Analizadores.parser parse;
        parse = new Analizadores.parser( new Analizadores.Lexico(new StringReader( fileContent.toString())));
        
            parse.parse();
        } catch (Exception ex) {
            System.out.println(ex);
        }
    }
}
