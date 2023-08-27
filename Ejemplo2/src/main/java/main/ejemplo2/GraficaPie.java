/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package main.ejemplo2;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.data.general.DefaultPieDataset;
/**
 *
 * @author Pc
 */
public class GraficaPie {
         public void Graficar(String titulo,ArrayList<String> ValuesX,ArrayList<Double> Values) throws IOException{
             DefaultPieDataset dataset = new DefaultPieDataset( );
                    for (int i = 0; i < ValuesX.size(); i++) {
                        dataset.setValue(ValuesX.get(i), Values.get(i) );
                    }
                    JFreeChart chart = ChartFactory.createPieChart(
                    titulo,   // chart title
                     dataset,          // data
                     true,             // include legend
                     true,
                     false);

                  int width = 640;   /* Width of the image */
                  int height = 480;  /* Height of the image */ 
                  File pieChart = new File( "PieChart.jpeg" ); 
                  ChartUtilities.saveChartAsJPEG( pieChart , chart , width , height );
         }
}
