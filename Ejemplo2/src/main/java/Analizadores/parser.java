
//----------------------------------------------------
// The following code was generated by CUP v0.11b 20160615 (GIT 4ac7450)
//----------------------------------------------------

package Analizadores;

import java_cup.runtime.*;
import main.ejemplo2.*;
import java.util.ArrayList;
import java_cup.runtime.XMLElement;

/** CUP v0.11b 20160615 (GIT 4ac7450) generated parser.
  */
@SuppressWarnings({"rawtypes"})
public class parser extends java_cup.runtime.lr_parser {

 public final Class getSymbolContainer() {
    return sym.class;
}

  /** Default constructor. */
  @Deprecated
  public parser() {super();}

  /** Constructor which sets the default scanner. */
  @Deprecated
  public parser(java_cup.runtime.Scanner s) {super(s);}

  /** Constructor which sets the default scanner. */
  public parser(java_cup.runtime.Scanner s, java_cup.runtime.SymbolFactory sf) {super(s,sf);}

  /** Production table. */
  protected static final short _production_table[][] = 
    unpackFromStrings(new String[] {
    "\000\027\000\002\002\011\000\002\002\004\000\002\003" +
    "\004\000\002\003\003\000\002\004\003\000\002\005\011" +
    "\000\002\005\011\000\002\006\004\000\002\006\003\000" +
    "\002\014\002\000\002\007\007\000\002\007\010\000\002" +
    "\007\010\000\002\015\002\000\002\007\007\000\002\016" +
    "\002\000\002\007\007\000\002\010\005\000\002\010\003" +
    "\000\002\011\005\000\002\011\003\000\002\012\003\000" +
    "\002\013\003" });

  /** Access to production table. */
  public short[][] production_table() {return _production_table;}

  /** Parse-action table. */
  protected static final short[][] _action_table = 
    unpackFromStrings(new String[] {
    "\000\077\000\004\004\004\001\002\000\004\005\007\001" +
    "\002\000\004\002\006\001\002\000\004\002\000\001\002" +
    "\000\004\006\010\001\002\000\004\007\011\001\002\000" +
    "\004\010\012\001\002\000\004\004\013\001\002\000\006" +
    "\011\021\023\022\001\002\000\006\004\ufffe\012\ufffe\001" +
    "\002\000\006\004\013\012\020\001\002\000\006\004\ufffd" +
    "\012\ufffd\001\002\000\006\004\uffff\012\uffff\001\002\000" +
    "\004\002\001\001\002\000\004\006\075\001\002\000\004" +
    "\006\023\001\002\000\004\007\024\001\002\000\004\010" +
    "\025\001\002\000\014\015\033\016\032\017\031\020\030" +
    "\021\026\001\002\000\004\013\071\001\002\000\016\012" +
    "\ufff9\015\ufff9\016\ufff9\017\ufff9\020\ufff9\021\ufff9\001\002" +
    "\000\004\013\065\001\002\000\004\013\061\001\002\000" +
    "\004\013\050\001\002\000\004\013\037\001\002\000\016" +
    "\012\036\015\033\016\032\017\031\020\030\021\026\001" +
    "\002\000\016\012\ufffa\015\ufffa\016\ufffa\017\ufffa\020\ufffa" +
    "\021\ufffa\001\002\000\006\004\ufffb\012\ufffb\001\002\000" +
    "\004\010\040\001\002\000\004\025\043\001\002\000\006" +
    "\012\045\022\044\001\002\000\006\012\uffef\022\uffef\001" +
    "\002\000\006\012\uffec\022\uffec\001\002\000\004\025\043" +
    "\001\002\000\004\014\046\001\002\000\016\012\ufff6\015" +
    "\ufff6\016\ufff6\017\ufff6\020\ufff6\021\ufff6\001\002\000\006" +
    "\012\ufff0\022\ufff0\001\002\000\004\010\051\001\002\000" +
    "\004\024\052\001\002\000\006\012\uffeb\022\uffeb\001\002" +
    "\000\006\012\uffed\022\uffed\001\002\000\006\012\056\022" +
    "\055\001\002\000\004\024\052\001\002\000\004\014\057" +
    "\001\002\000\016\012\ufff5\015\ufff5\016\ufff5\017\ufff5\020" +
    "\ufff5\021\ufff5\001\002\000\006\012\uffee\022\uffee\001\002" +
    "\000\004\025\062\001\002\000\004\014\ufff4\001\002\000" +
    "\004\014\064\001\002\000\016\012\ufff3\015\ufff3\016\ufff3" +
    "\017\ufff3\020\ufff3\021\ufff3\001\002\000\004\025\066\001" +
    "\002\000\004\014\ufff2\001\002\000\004\014\070\001\002" +
    "\000\016\012\ufff1\015\ufff1\016\ufff1\017\ufff1\020\ufff1\021" +
    "\ufff1\001\002\000\004\025\072\001\002\000\004\014\ufff8" +
    "\001\002\000\004\014\074\001\002\000\016\012\ufff7\015" +
    "\ufff7\016\ufff7\017\ufff7\020\ufff7\021\ufff7\001\002\000\004" +
    "\007\076\001\002\000\004\010\077\001\002\000\014\015" +
    "\033\016\032\017\031\020\030\021\026\001\002\000\016" +
    "\012\101\015\033\016\032\017\031\020\030\021\026\001" +
    "\002\000\006\004\ufffc\012\ufffc\001\002" });

  /** Access to parse-action table. */
  public short[][] action_table() {return _action_table;}

  /** <code>reduce_goto</code> table. */
  protected static final short[][] _reduce_table = 
    unpackFromStrings(new String[] {
    "\000\077\000\004\002\004\001\001\000\002\001\001\000" +
    "\002\001\001\000\002\001\001\000\002\001\001\000\002" +
    "\001\001\000\002\001\001\000\010\003\014\004\013\005" +
    "\015\001\001\000\002\001\001\000\002\001\001\000\006" +
    "\004\016\005\015\001\001\000\002\001\001\000\002\001" +
    "\001\000\002\001\001\000\002\001\001\000\002\001\001" +
    "\000\002\001\001\000\002\001\001\000\006\006\033\007" +
    "\026\001\001\000\002\001\001\000\002\001\001\000\002" +
    "\001\001\000\002\001\001\000\002\001\001\000\002\001" +
    "\001\000\004\007\034\001\001\000\002\001\001\000\002" +
    "\001\001\000\002\001\001\000\006\010\040\012\041\001" +
    "\001\000\002\001\001\000\002\001\001\000\002\001\001" +
    "\000\004\012\046\001\001\000\002\001\001\000\002\001" +
    "\001\000\002\001\001\000\002\001\001\000\006\011\053" +
    "\013\052\001\001\000\002\001\001\000\002\001\001\000" +
    "\002\001\001\000\004\013\057\001\001\000\002\001\001" +
    "\000\002\001\001\000\002\001\001\000\002\001\001\000" +
    "\004\015\062\001\001\000\002\001\001\000\002\001\001" +
    "\000\002\001\001\000\004\016\066\001\001\000\002\001" +
    "\001\000\002\001\001\000\002\001\001\000\004\014\072" +
    "\001\001\000\002\001\001\000\002\001\001\000\002\001" +
    "\001\000\002\001\001\000\006\006\077\007\026\001\001" +
    "\000\004\007\034\001\001\000\002\001\001" });

  /** Access to <code>reduce_goto</code> table. */
  public short[][] reduce_table() {return _reduce_table;}

  /** Instance of action encapsulation class. */
  protected CUP$parser$actions action_obj;

  /** Action encapsulation object initializer. */
  protected void init_actions()
    {
      action_obj = new CUP$parser$actions(this);
    }

  /** Invoke a user supplied parse action. */
  public java_cup.runtime.Symbol do_action(
    int                        act_num,
    java_cup.runtime.lr_parser parser,
    java.util.Stack            stack,
    int                        top)
    throws java.lang.Exception
  {
    /* call code in generated class */
    return action_obj.CUP$parser$do_action(act_num, parser, stack, top);
  }

  /** Indicates start state. */
  public int start_state() {return 0;}
  /** Indicates start production. */
  public int start_production() {return 1;}

  /** <code>EOF</code> Symbol index. */
  public int EOF_sym() {return 0;}

  /** <code>error</code> Symbol index. */
  public int error_sym() {return 1;}



    public GraficarBarras gb = new GraficarBarras();
    public GraficaPie gp = new GraficaPie();
    private ArrayList<Double> Values = new ArrayList<Double>();
    private ArrayList<String> ValuesX = new ArrayList<String>();
    String titulo;
    String titulox;
    String tituloy;



/** Cup generated class to encapsulate user supplied action code.*/
@SuppressWarnings({"rawtypes", "unchecked", "unused"})
class CUP$parser$actions {
  private final parser parser;

  /** Constructor */
  CUP$parser$actions(parser parser) {
    this.parser = parser;
  }

  /** Method 0 with the actual generated action code for actions 0 to 300. */
  public final java_cup.runtime.Symbol CUP$parser$do_action_part00000000(
    int                        CUP$parser$act_num,
    java_cup.runtime.lr_parser CUP$parser$parser,
    java.util.Stack            CUP$parser$stack,
    int                        CUP$parser$top)
    throws java.lang.Exception
    {
      /* Symbol object for return from actions */
      java_cup.runtime.Symbol CUP$parser$result;

      /* select the action based on the action number */
      switch (CUP$parser$act_num)
        {
          /*. . . . . . . . . . . . . . . . . . . .*/
          case 0: // INICIO ::= Rvoid RMain pabre pcierra allave INSTRUCCIONES cllave 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INICIO",0, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-6)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 1: // $START ::= INICIO EOF 
            {
              Object RESULT =null;
		int start_valleft = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-1)).left;
		int start_valright = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-1)).right;
		Object start_val = (Object)((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-1)).value;
		RESULT = start_val;
              CUP$parser$result = parser.getSymbolFactory().newSymbol("$START",0, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-1)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          /* ACCEPT */
          CUP$parser$parser.done_parsing();
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 2: // INSTRUCCIONES ::= INSTRUCCIONES INSTRUCCION 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONES",1, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-1)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 3: // INSTRUCCIONES ::= INSTRUCCION 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONES",1, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 4: // INSTRUCCION ::= GRAFICAB 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCION",2, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 5: // GRAFICAB ::= Rvoid RGB pabre pcierra allave INSTRUCCIONESGB cllave 
            {
              Object RESULT =null;
		
    gb.Graficar(titulo,titulox,tituloy,ValuesX,Values);
   titulo="";
    ValuesX.clear();
    Values.clear();


              CUP$parser$result = parser.getSymbolFactory().newSymbol("GRAFICAB",3, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-6)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 6: // GRAFICAB ::= Rvoid RGP pabre pcierra allave INSTRUCCIONESGB cllave 
            {
              Object RESULT =null;
		
         gp.Graficar(titulo, ValuesX, Values);
         titulo="";
         ValuesX.clear();
         Values.clear();

              CUP$parser$result = parser.getSymbolFactory().newSymbol("GRAFICAB",3, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-6)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 7: // INSTRUCCIONESGB ::= INSTRUCCIONESGB INSTRUCCIONGB 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONESGB",4, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-1)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 8: // INSTRUCCIONESGB ::= INSTRUCCIONGB 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONESGB",4, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 9: // NT$0 ::= 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
 titulo = (String)a;
              CUP$parser$result = parser.getSymbolFactory().newSymbol("NT$0",10, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 10: // INSTRUCCIONGB ::= RTitulo igual cadenas NT$0 pcoma 
            {
              Object RESULT =null;
              // propagate RESULT from NT$0
                RESULT = (Object) ((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-1)).value;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-2)).value;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONGB",5, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-4)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 11: // INSTRUCCIONGB ::= REjex igual allave LISTAEJEX cllave pcoma 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONGB",5, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-5)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 12: // INSTRUCCIONGB ::= RValores igual allave LISTAVALORES cllave pcoma 
            {
              Object RESULT =null;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONGB",5, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-5)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 13: // NT$1 ::= 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
 titulox=(String)a;
              CUP$parser$result = parser.getSymbolFactory().newSymbol("NT$1",11, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 14: // INSTRUCCIONGB ::= RTituloX igual cadenas NT$1 pcoma 
            {
              Object RESULT =null;
              // propagate RESULT from NT$1
                RESULT = (Object) ((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-1)).value;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-2)).value;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONGB",5, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-4)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 15: // NT$2 ::= 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
tituloy=(String)a;
              CUP$parser$result = parser.getSymbolFactory().newSymbol("NT$2",12, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 16: // INSTRUCCIONGB ::= RTituloY igual cadenas NT$2 pcoma 
            {
              Object RESULT =null;
              // propagate RESULT from NT$2
                RESULT = (Object) ((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-1)).value;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.elementAt(CUP$parser$top-2)).value;

              CUP$parser$result = parser.getSymbolFactory().newSymbol("INSTRUCCIONGB",5, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-4)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 17: // LISTAEJEX ::= LISTAEJEX coma ELEMENTOSEJEX 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		Object a = (Object)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 ValuesX.add((String)a); 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("LISTAEJEX",6, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 18: // LISTAEJEX ::= ELEMENTOSEJEX 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		Object a = (Object)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 ValuesX.add((String)a); RESULT = ValuesX; 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("LISTAEJEX",6, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 19: // LISTAVALORES ::= LISTAVALORES coma ELEMENTOSVALORES 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		Object a = (Object)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 Values.add((Double)a); 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("LISTAVALORES",7, ((java_cup.runtime.Symbol)CUP$parser$stack.elementAt(CUP$parser$top-2)), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 20: // LISTAVALORES ::= ELEMENTOSVALORES 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		Object a = (Object)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 Values.add((Double)a); RESULT = Values; 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("LISTAVALORES",7, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 21: // ELEMENTOSEJEX ::= cadenas 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 RESULT= a; 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("ELEMENTOSEJEX",8, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /*. . . . . . . . . . . . . . . . . . . .*/
          case 22: // ELEMENTOSVALORES ::= decimales 
            {
              Object RESULT =null;
		int aleft = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).left;
		int aright = ((java_cup.runtime.Symbol)CUP$parser$stack.peek()).right;
		String a = (String)((java_cup.runtime.Symbol) CUP$parser$stack.peek()).value;
		 RESULT= Double.parseDouble(a); 
              CUP$parser$result = parser.getSymbolFactory().newSymbol("ELEMENTOSVALORES",9, ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), ((java_cup.runtime.Symbol)CUP$parser$stack.peek()), RESULT);
            }
          return CUP$parser$result;

          /* . . . . . .*/
          default:
            throw new Exception(
               "Invalid action number "+CUP$parser$act_num+"found in internal parse table");

        }
    } /* end of method */

  /** Method splitting the generated action code into several parts. */
  public final java_cup.runtime.Symbol CUP$parser$do_action(
    int                        CUP$parser$act_num,
    java_cup.runtime.lr_parser CUP$parser$parser,
    java.util.Stack            CUP$parser$stack,
    int                        CUP$parser$top)
    throws java.lang.Exception
    {
              return CUP$parser$do_action_part00000000(
                               CUP$parser$act_num,
                               CUP$parser$parser,
                               CUP$parser$stack,
                               CUP$parser$top);
    }
}

}
