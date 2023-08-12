/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Analizadores;
import java.util.LinkedList;
/**
 *
 * @author Pc
 */
public class CalculadoraDePila {
    
    private LinkedList<Integer> mPila = new LinkedList<Integer>();
    
    public void add(){
        try {
             mPila.push( mPila.pop() +mPila.pop());
        } catch (Exception e) {
            System.out.println("Error push en suma");
        }
        
    }
    public void sub(){
        try {
             mPila.push( mPila.pop() - mPila.pop());
        } catch (Exception e) {
            System.out.println("Error push en resta");
        }
        
    }
    public void mult(){
        try {
             mPila.push( mPila.pop() * mPila.pop());
        } catch (Exception e) {
            System.out.println("Error push en multiplicacion");
        }
        
    }
    public void div(){
        try {
             mPila.push( mPila.pop() / mPila.pop());
       
        } catch (Exception e) {
            System.out.println("Error push en division");
        }
        
    }
    public void print(){
        try {
            System.out.println(mPila.pop());
        } catch (Exception e) {
            System.out.println("Error push en resta");
        }
        
    }
    public void push(Integer pNumber){
        mPila.push(pNumber);
        
    }
}
