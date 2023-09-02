/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package main.ejemplo3;
import java.util.Hashtable;
/**
 *
 * @author Pc
 */
public class TS {
        private Hashtable<String, String> tabla;
        public TS() {
            tabla = new Hashtable<>();
        }
        public void add(String clave, String valor) {
            tabla.put(clave, valor);
 
        }
        public String get(String clave) {
             return tabla.get(clave);
        }
        
}
