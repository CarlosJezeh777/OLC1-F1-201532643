/* Definición Léxica */
%{
	const {Declaracion} = require('../instrucciones/declaraciones');
	const {Literal} = require('../Expresiones/Literales');
	const {Type} = require('../Symbols/type')
	const {Asignar} = require('../instrucciones/asignar');
	const {Aritmeticas} = require('../Expresiones/Aritmeticas');
	const {AritmeticasOptions} = require('../Expresiones/aritmeticasOpc');
	const {Relacional} = require('../Expresiones/Relacional');
	const {OpcionRelacional} = require('../Expresiones/RelacionalOpc');
	const {Logica} = require('../Expresiones/Logicas');
	const {OpcionesLogicas} = require('../Expresiones/LogicasOpc');
	const {OpcionesInDe} = require('../instrucciones/IncrementosOpc');
	const {InDe} = require('../instrucciones/Incrementos');
	const {Acces} = require('../Expresiones/Acceso');
	const {Iif} = require('../instrucciones/InstruccionIF')
	const {If_Else} = require('../instrucciones/If_else')
	const {Bloque} = require('../instrucciones/Bloque')
	const {Imprimir} = require('../instrucciones/imprimir')
	const {IWhile} = require('../instrucciones/InstWhile')
	const {Type_Of} = require('../Expresiones/TypeOf')
	const {Else_If} = require('../instrucciones/else_if')
	const {If_Else_If} = require('../instrucciones/IF2')
	const {Casos} = require('../instrucciones/Cases')
	const {Switch_I} = require('../instrucciones/Switch_I')
	const {DoWhile} = require('../instrucciones/DoWhile')
	const {For_Inst} = require('../instrucciones/For_I')
	const {Metodos} = require('../instrucciones/IMetdos')
	const {Llamada} = require('../instrucciones/Llamada')
	const {MetodosP} = require('../instrucciones/MetodoPara')
	const {LlamadaP} = require('../instrucciones/llamadaP')
	const {TernarioI} = require('../instrucciones/Ternario_I')
	const {ToLower} = require('../Expresiones/ToLower')
	const {ToUpper} = require('../Expresiones/ToUpper')
	const {Round} = require('../Expresiones/Round')
	const {ILength} = require('../Expresiones/Length')
	const {TernarioE} = require('../Expresiones/Ternario_E')
	const {VectorD1} = require('../instrucciones/Vector1')
	const {AsignarV} = require('../instrucciones/asignarV');
	const {Pop} = require('../instrucciones/Pop');
	const {Push} = require('../instrucciones/Push');
	const {Splice} = require('../instrucciones/Splice');
	const {EVector} = require('../Expresiones/EVector')
	const {CharArray} = require('../instrucciones/CharArray');
	const {IndexOf} = require('../Expresiones/IndexOf')
	const { Singleton } = require('../Singleton/Singleton');
	const { Errores } = require('../Singleton/Errores');
	const {GTS} = require('../instrucciones/GraficarTs')
	const {VectorD1D} = require('../instrucciones/VectorD')
	const {Matriz} = require('../instrucciones/Matriz')
	const {AsignarM} = require('../instrucciones/asignarM');
	const {EMatriz} = require('../Expresiones/EMatriz')
	const {MatrizD} = require('../instrucciones/MatrizD')
	const {Umenos} = require('../Expresiones/Umenos')

	const singleton = Singleton.getInstance()

%}

%lex
%options case-insensitive

%%

\s+                   /* skip whitespace */
"//".*                // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas
						

//"\""                 return 'COMILLASDOBLES';
"\\"                 return 'BARRAINVERTIDA';
"\n"                 return 'NUEVALINEA';
"\r"                 return 'RETORNO';
"\t"                 return 'TABULACION';

"int"           		return 'r_int';
"double"       			return 'r_double';
"char"           		return 'r_char';
"boolean"           	return 'r_bool';
"string"           		return 'r_string';
					
"const"           		return 'r_const';
"if"           			return 'r_if';
"else"           		return 'r_else';
"switch"           		return 'r_switch';
"case"           		return 'r_case';
"default"           	return 'r_default';
"for"           		return 'r_for';
"while"           		return 'r_while';
"do"           			return 'r_do';
"break"           		return 'r_break';
"continue"          	return 'r_continue';
"void"           		return 'r_void';
					
"return"           		return 'r_return';
"call"           		return 'r_call';
"Println"           	return 'r_println';
"Print"           		return 'r_print';
"Typeof"           		return 'r_typeof';
"ToLower"           	return 'r_tolower';
"ToUpper"           	return 'r_toupper';
"Round"           	return 'r_round';
"Length"           	return 'r_length';
"new"           	return 'r_new';
"graficar_ts"           	return 'r_graficarTs';
"pop"           	return 'r_pop';
"push"           	return 'r_push';
"splice"           	return 'r_splice';
"indexof"           	return 'r_indexof';
"toCharArray"           	return 'r_toChar';



">="                	return 'mayor_igual';
"<="                	return 'menor_igual';
"=="                	return 'igual_que';
"!="                	return 'no_igual';
">"                 	return 'mayor';
"<"                 	return 'menor';
					
"||"                	return 'or';
"&&"                	return 'and';
"^"                 	return 'xor';
"!"                 	return 'not';
					

"="                 	return 'igual';
";"                 	return 'punto_coma';
","                 	return 'coma';
":"                 	return 'dos_puntos';
"("                 	return 'parentesis_a';
")"                 	return 'parentesis_c';
"{"                 	return 'llave_a';
"}"                 	return 'llave_c';
"["                 	return 'corchete_a';
"]"                 	return 'corchete_c';
"?"                 	return 'interrogacion';
"."                 	return 'punto';


"++"                	return 'incremento';
"--"                	return 'decremento';
"**"                	return 'potencia';
"+"                 	return 'suma';
"-"                 	return 'resta';
"*"                 	return 'por';
"/"                 	return 'div';
"%"                 	return 'mod';
					

[0-9]+"."[0-9]+			return 'decimal';
[0-9]+               	return 'entero';
"\""[^\"]*"\"" 		return 'cadena';
"'"[^\"]?"'"				return 'caracter';
"true"|"false"				return 'boolean';
						
([a-zA-Z])[a-zA-Z0-9_]*		return 'identificador';
						


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); 
							singleton.addErrores(new Errores("Error: " + yytext,"Lexico",yylloc.first_line,yylloc.first_column))}
/lex

/* Asociación de operadores y precedencia */
%left 'interrogacion' 'dos_puntos' 
%left 'r_typeof' 'r_tolower' 'r_toupper' 'r_round' 'r_length' 'r_indexof' 'r_toChar'
%left 'igual' 'coma' 'incremento' 'decremento'
%left 'or' 'xor' 'and' 'not'
%left 'mayor' 'mayor_igual' 'menor' 'menor_igual' 'igual_que' 'no_igual'
%left 'potencia' 'mod'
%left 'suma' 'resta'
%left 'por' 'div'
%left umenos

%start INIT

%% /* Definición de la gramática */

INIT : INTRUCCIONES EOF {return $1}
;

INTRUCCIONES : INTRUCCIONES INTRUCCION 	{ $1.push($2); $$ = $1;}
	|INTRUCCION 						{$$ = [$1]}
	|error {console.error('Este es un error sintactico: ' + yytext + ', en la linea: '+ this._$.first_line+', en la columna: '+this._$.first_column);
			singleton.addErrores(new Errores("Error: " + yytext,"Sintactico",this._$.first_line,this._$.first_column))}
;

INTRUCCION:DVARIABLES 	{$$=$1}
	|ASIGNACION 		{$$ = $1}
	|IF 				{$$ = $1}
	|SWITCH				{$$ = $1}
	|FOR				{$$ = $1}
	|WHILE				{$$ = $1}
	|DO_WHILE			{$$ = $1}
	|MET_FUN			{$$ = $1}
	|LLAMADA			{$$ = $1}
	|BLOQUE				{$$ = $1}
	|FUNCIONES_NATIVAS	{$$ = $1}
	|RETORNO			{$$ = $1}
	|TERNARIO			{$$ = $1}
	|DECLARACIONVECTORES			{$$ = $1}
	|GRAFICARTS			{$$ = $1}
	|ASIGNACIONVECTORES			{$$ = $1}
	|METODOSVECTORES {$$ = $1}
;

DVARIABLES: TIPO_DATO identificador igual EXPRESION punto_coma {$$ = new Declaracion($1,$2,$4,true,@1.first_line,@1.first_column);}
	|r_const  TIPO_DATO identificador igual EXPRESION punto_coma		{$$ = new Declaracion($2,$3,$5,false,@1.first_line,@1.first_column);}
	|TIPO_DATO identificador punto_coma									{$$ = new Declaracion($1,$2,null,true,@1.first_line,@1.first_column);}
	| r_const  TIPO_DATO identificador punto_coma						{$$ = new Declaracion($2,$3,null,true,@1.first_line,@1.first_column);}
;

ASIGNACION: identificador igual EXPRESION punto_coma	{$$ = new Asignar($1,$3,@1.first_line,@1.first_column);}		
			|INCREMENTOS punto_coma {$$=$1}
;

DECLARACIONVECTORES: TIPO_DATO identificador corchete_a corchete_c igual r_new TIPO_DATO corchete_a EXPRESION corchete_c punto_coma {$$ = new VectorD1($1,$2,$7,$9,@1.first_line,@1.first_column);}
					|TIPO_DATO identificador corchete_a corchete_c corchete_a corchete_c igual r_new TIPO_DATO corchete_a EXPRESION corchete_c corchete_a EXPRESION corchete_c punto_coma {$$ = new Matriz($1,$2,$9,$11,$14,@1.first_line,@1.first_column);}
					|TIPO_DATO identificador corchete_a corchete_c igual corchete_a PARAMETROS corchete_c punto_coma {$$ = new VectorD1D($1,$2,$7,@1.first_line,@1.first_column)}
					|TIPO_DATO identificador corchete_a corchete_c corchete_a corchete_c igual corchete_a VALORESMATRIZ corchete_c punto_coma {$$ = new MatrizD($1,$2,$9,@1.first_line,@1.first_column)}
					
;

VALORESMATRIZ: VALORESMATRIZ coma corchete_a PARAMETROS  corchete_c{$1.push($4); $$ = $1;}
			|corchete_a PARAMETROS corchete_c 	{$$ = [$2]}
;

ASIGNACIONVECTORES:identificador corchete_a EXPRESION corchete_c igual EXPRESION punto_coma {$$ = new AsignarV($1,$3,$6,@1.first_line,@1.first_column)}
				|identificador corchete_a EXPRESION corchete_c corchete_a EXPRESION corchete_c igual EXPRESION punto_coma {$$ = new AsignarM($1,$3,$6,$9,@1.first_line,@1.first_column)}
;

METODOSVECTORES: identificador punto r_pop parentesis_a parentesis_c punto_coma		{$$ = new Pop($1,@1.first_line,@1.first_column)}
				|identificador punto r_push parentesis_a  EXPRESION parentesis_c punto_coma	{$$ = new Push($1,$5,@1.first_line,@1.first_column)}
				|identificador punto r_splice parentesis_a  EXPRESION coma EXPRESION parentesis_c punto_coma	{$$ = new Splice($1,$5,$7,@1.first_line,@1.first_column)}
				|TIPO_DATO identificador corchete_a corchete_c igual r_toChar EXPRESION punto_coma {$$ = new CharArray($2,$7,@1.first_line,@1.first_column)}
;

GRAFICARTS: r_graficarTs parentesis_a parentesis_c punto_coma {$$ = new GTS(@1.first_line,@1.first_column);}
;

IF:r_if EXPRESION BLOQUE  {$$ = new Iif($2,$3,@1.first_line,@1.first_column);} 
		|r_if EXPRESION BLOQUE r_else BLOQUE {$$ = new If_Else($2,$3,$5,@1.first_line,@1.first_column);}
		|r_if EXPRESION BLOQUE ELSE_IF {$$ = new If_Else_If($2,$3,$4,@1.first_line,@1.first_column);}
;


ELSE_IF:ELSE_IF I_ELSE_IF 	{$1.push($2); $$ = $1;}
	|I_ELSE_IF {$$ = [$1]}
;

I_ELSE_IF:r_else r_if EXPRESION BLOQUE	{$$ = new Else_If($3,$4,@1.first_line,@1.first_column);}
;

SWITCH:r_switch parentesis_a identificador parentesis_c llave_a CASE llave_c {$$ = new Switch_I($3,$6,@1.first_line,@1.first_column)}
;

CASE:CASE I_CASE {$1.push($2); $$ = $1;}
	|I_CASE {$$ = [$1]}
;

I_CASE: r_case TIPO_LITERAL dos_puntos INTRUCCIONES r_break punto_coma {$$ = new Casos($2,$4,@1.first_line,@1.first_column)}
	|default dos_puntos INTRUCCIONES 
;

FOR:r_for parentesis_a ASIG_FOR parentesis_c BLOQUE	{$$ = new For_Inst($3[0],$3[1],$3[2],$5,@1.first_line,@1.first_column);}
;

ASIG_FOR: DVARIABLES  EXPRESION punto_coma INCREMENTOS {$$ = [$1,$2,$4]}
	|ASIGNACION  EXPRESION punto_coma INCREMENTOS	{$$ = [$1,$2,$4]}
;

WHILE:r_while EXPRESION  BLOQUE {$$ = new IWhile($2,$3,@1.first_line,@1.first_column);}
;

DO_WHILE:r_do BLOQUE r_while EXPRESION punto_coma {$$ = new DoWhile($4,$2,@1.first_line,@1.first_column);}
;

MET_FUN:r_void identificador parentesis_a parentesis_c BLOQUE 	{$$ = new Metodos($2,$5,@1.first_line,@1.first_column);}
	|r_void identificador parentesis_a ASIG_PARAMETROS parentesis_c BLOQUE 	{$$ = new MetodosP($2,$4,$6,@1.first_line,@1.first_column);}
	|TIPO_DATO identificador parentesis_a parentesis_c llave_a INTRUCCIONES RETORNO llave_c
	|TIPO_DATO identificador parentesis_a ASIG_PARAMETROS parentesis_c BLOQUE
;

LLAMADA:r_call identificador parentesis_a parentesis_c punto_coma {$$ =new Llamada($2,@1.first_line,@1.first_column)}
	|r_call identificador parentesis_a PARAMETROS parentesis_c  punto_coma	{$$ =new LlamadaP($2,$4,@1.first_line,@1.first_column)}
;

ASIG_PARAMETROS: ASIG_PARAMETROS coma A_P {$1.push($3); $$ = $1;}
	|A_P {$$ = [$1]}
;

A_P	: TIPO_DATO identificador {$$ = new Declaracion($1,$2,null,true,@1.first_line,@1.first_column);}
;	

PARAMETROS	
	: PARAMETROS coma EXPRESION {$1.push($3); $$ = $1;}
	| EXPRESION    {$$ = [$1]}
;

BLOQUE
	:llave_a INTRUCCIONES llave_c		{$$ =  new Bloque($2,@1.first_line,@1.first_column);}
;


TERNARIO: EXPRESION interrogacion INTRUCCIONES dos_puntos INTRUCCIONES punto_coma {$$ = new TernarioI($1,$3,$5,@1.first_line,@1.first_column);}
;

TIPO_DATO
	:r_int  	{$$=Type.INT}
	|r_double	{$$=Type.DOUBLE}
	|r_string	{$$=Type.STRING}
	|r_char		{$$=Type.CHAR}
	|r_bool		{$$=Type.BOOLEAN}
;

INCREMENTOS:identificador incremento 	{$$ =  new InDe(1,$1,OpcionesInDe.MAMA,@1.first_line,@1.first_column);}
			|identificador decremento 	{$$ =  new InDe(1,$1,OpcionesInDe.MEME,@1.first_line,@1.first_column);}
			|incremento identificador  	{$$ =  new InDe(0,$2,OpcionesInDe.MAMA,@1.first_line,@1.first_column);}
			|decremento identificador 	{$$ =  new InDe(0,$2,OpcionesInDe.MEME,@1.first_line,@1.first_column);}
;

FUNCIONES_NATIVAS
	:r_println  EXPRESION punto_coma 	{$$ = new Imprimir(1,$2,@1.first_line,@1.first_column);}
	|r_println parentesis_a MET_FUN parentesis_c punto_coma		
	|r_println parentesis_a parentesis_c punto_coma				{$$ = new Imprimir(2,null,@1.first_line,@1.first_column);}
	|r_print EXPRESION punto_coma	{$$ = new Imprimir(0,$2,@1.first_line,@1.first_column);}	
	|r_print parentesis_a  MET_FUN parentesis_c punto_coma

;

EXPRESION: resta EXPRESION %prec umenos {$$ = new Umenos($2,@1.first_line,@1.first_column)}
	|EXPRESION interrogacion EXPRESION dos_puntos EXPRESION {$$ = new TernarioE($1,$3,$5,@1.first_line,@1.first_column);}
	|identificador punto r_indexof EXPRESION {$$ = new IndexOf($1,$4,@1.first_line,@1.first_column)}
	|r_round EXPRESION					{$$ = new Round($2,@1.first_line,@1.first_column);}
	|r_toupper EXPRESION				{$$ = new ToUpper($2,@1.first_line,@1.first_column);}
	|r_length EXPRESION					{$$ = new ILength($2,@1.first_line,@1.first_column);}
	|r_tolower EXPRESION 	 			{$$ = new ToLower($2,@1.first_line,@1.first_column);}
	|r_typeof EXPRESION 				{$$ = new Type_Of($2,@1.first_line,@1.first_column);}
	|EXPRESION or EXPRESION				{$$ = new Logica($1,$3,OpcionesLogicas.OR,@1.first_line,@1.first_column)}
	|not EXPRESION						{$$ = new Logica($2,$2,OpcionesLogicas.NOT,@1.first_line,@1.first_column)}
	|EXPRESION xor EXPRESION			{$$ = new Logica($1,$3,OpcionesLogicas.XOR,@1.first_line,@1.first_column)}
	|EXPRESION and EXPRESION			{$$ = new Logica($1,$3,OpcionesLogicas.AND,@1.first_line,@1.first_column)}
	|EXPRESION mayor EXPRESION			{$$ = new Relacional($1,$3,OpcionRelacional.MAYORQUE,@1.first_line,@1.first_column)}
	|EXPRESION mayor_igual EXPRESION	{$$ = new Relacional($1,$3,OpcionRelacional.MAYORIGUAL,@1.first_line,@1.first_column)}
	|EXPRESION menor EXPRESION			{$$ = new Relacional($1,$3,OpcionRelacional.MENORQUE,@1.first_line,@1.first_column)}
	|EXPRESION menor_igual EXPRESION	{$$ = new Relacional($1,$3,OpcionRelacional.MENORIGUAL,@1.first_line,@1.first_column)}
	|EXPRESION igual_que EXPRESION		{$$ = new Relacional($1,$3,OpcionRelacional.IGUALQUE,@1.first_line,@1.first_column)}
	|EXPRESION no_igual EXPRESION		{$$ = new Relacional($1,$3,OpcionRelacional.NOIGUAL,@1.first_line,@1.first_column)}
	|EXPRESION mod EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MODULO,@1.first_line,@1.first_column)}
	|EXPRESION potencia EXPRESION 		{$$ = new Aritmeticas($1,$3,AritmeticasOptions.POTENCIA,@1.first_line,@1.first_column)}
	|EXPRESION suma EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MAS,@1.first_line,@1.first_column)}
	|EXPRESION resta EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MENOS,@1.first_line,@1.first_column)}
	|EXPRESION por EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MULTIPLICAR,@1.first_line,@1.first_column)}
	|EXPRESION div EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.DIVIDIR,@1.first_line,@1.first_column)}
	|parentesis_a EXPRESION parentesis_c{$$ = $2}       						
	|identificador corchete_a EXPRESION corchete_c	{$$ = new EVector($1,$3,@1.first_line,@1.first_column)}
	|identificador corchete_a EXPRESION corchete_c corchete_a EXPRESION corchete_c	{$$ = new EMatriz($1,$3,$6,@1.first_line,@1.first_column)}
	|identificador						{$$ = new Acces($1,@1.first_line,@1.first_column);} 
	|TIPO_LITERAL						{$$ = $1}	
	;

TIPO_LITERAL:entero						{$$ = new Literal($1,Type.INT,		@1.first_line,@1.first_column)}  
 	|decimal       						{$$ = new Literal($1,Type.DOUBLE,	@1.first_line,@1.first_column)}                 								 
	|cadena								{$$ = new Literal($1,Type.STRING,	@1.first_line,@1.first_column)}
	|caracter							{$$ = new Literal($1,Type.CHAR,		@1.first_line,@1.first_column)}
	|boolean							{$$ = new Literal($1,Type.BOOLEAN,	@1.first_line,@1.first_column)}
;
RETORNO:r_return EXPRESION punto_coma {}
	|r_break punto_coma
	|r_continue punto_coma
	;

