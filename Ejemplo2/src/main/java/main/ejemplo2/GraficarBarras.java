/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package main.ejemplo2;
import java.io.*;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.chart.ChartUtilities;
import java.util.ArrayList;
/**
 *
 * @author Pc
 */
public class GraficarBarras {
        public void Graficar(String titulo,String titulox,String tituloy,ArrayList<String> ValuesX,ArrayList<Double> Values) throws IOException{
                    final DefaultCategoryDataset dataset = new DefaultCategoryDataset( );
                    for (int i = 0; i < ValuesX.size(); i++) {
                        dataset.addValue( Values.get(i) , ValuesX.get(i) , ValuesX.get(i));
                       
                    }
                    JFreeChart barChart = ChartFactory.createBarChart(
                        titulo, 
                        titulox, tituloy, 
                        dataset,PlotOrientation.VERTICAL, 
                        true, true, false);
                    
                    int width = 640;    /* Width of the image */
                    int height = 480;   /* Height of the image */ 
                    File BarChart = new File( "BarChart.jpeg" ); 
                    ChartUtilities.saveChartAsJPEG( BarChart , barChart , width , height );
                }
}
