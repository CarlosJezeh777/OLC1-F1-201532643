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

"int"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_int';
					}
"double"       		{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_double';
					}
"char"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_char';
					}
"boolean"           {
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_bool';
					}
"string"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_string';
					}

"const"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_const';
					}
"if"           		{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_if';
					}
"else"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_else';
					}
"switch"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_switch';
					}
"case"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_case';
					}
"default"           {
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_default';
					}
"for"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_for';
					}
"while"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_while';
					}
"do"           		{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_do';
					}
"break"           	{
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_break';
					}
"continue"          {
					//	console.log("Se reconocio el lexema: " + yytext);
						return 'r_continue';
					}
"void"           	{
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_void';
					}
"return"           	{
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_return';
					}
"call"           	{
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_call';
					}
"Println"           {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_println';
					}
"Print"           	{
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_print';
					}
"Typeof"           	{
						//console.log("Se reconocio el lexema: " + yytext);
						return 'r_typeof';
					}
">="                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'mayor_igual';
					}
"<="                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'menor_igual';
					}
"=="                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'igual_que';
					}
"."					{
						return '.'
					}
"!="                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'no_igual';
					}
">"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'mayor';
					}
"<"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'menor';
					}

"||"                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'or';
					}
"&&"                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'and';
					}
"^"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'xor';
					}
"!"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'not';
					}

"="                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'igual';
					}
";"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'punto_coma';
					}
","                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'coma';
					}
":"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'dos_puntos';
					}

"("                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'parentesis_a';
					}

")"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'parentesis_c';
					}
"{"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'llave_a';
					}
"}"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'llave_c';
					}

"++"                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'incremento';
					}
"--"                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'decremento';
					}

"**"                {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'potencia';
					}
"+"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'suma';
					}
"-"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'resta';
					}
"*"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'por';
					}
"/"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'div';
					}
"%"                 {
						//console.log("Se reconocio el lexema: " + yytext);
						return 'mod';
					}

[0-9]+"."[0-9]+		{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'decimal';
						}
[0-9]+               {
							//console.log("Se reconocio el lexema: " + yytext);
							return 'entero';
						}

"\""[^\"]*"\"" 	{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'cadena';
						}
"'"[^\"]?"'"			{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'caracter';
						}
"true"|"false"			{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'boolean';
						}	
([a-zA-Z])[a-zA-Z0-9_]*	{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'identificador';
						}


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */
%left 'igual' 'coma' 'incremento' 'decremento'
%left 'or' 'xor' 'and' 'not'
%left 'mayor' 'mayor_igual' 'menor' 'menor_igual' 'igual_que' 'no_igual'
%left 'potencia' 'mod'
%left 'suma' 'resta'
%left 'por' 'div'

%start INIT

%% /* Definición de la gramática */

INIT : INTRUCCIONES EOF {return $1}
;

INTRUCCIONES : INTRUCCIONES INTRUCCION 	{ $1.push($2); $$ = $1;}
	|INTRUCCION 						{$$ = [$1]}
	|error {console.error('Este es un error sintactico: ' + yytext + ', en la linea: '+ this._$.first_line+', en la columna: '+this._$.first_column);}
;

INTRUCCION:DVARIABLES 	{$$=$1}
	|ASIGNACION 		{$$ = $1}
	|IF 				{$$ = $1}
	|SWITCH
	|FOR
	|WHILE				{$$ = $1}
	|DO_WHILE
	|MET_FUN
	|LLAMADA
	|BLOQUE				{$$ = $1}
	|FUNCIONES_NATIVAS	{$$ = $1}
	|INCREMENTOS		{$$ = $1}
;

DVARIABLES: TIPO_DATO identificador igual EXPRESION punto_coma {$$ = new Declaracion($1,$2,$4,@1.first_line,@1.first_column);}
	|r_const identificador igual EXPRESION punto_coma
;

ASIGNACION: identificador igual EXPRESION punto_coma	{$$ = new Asignar($1,$3,@1.first_line,@1.first_column);}		
;

IF:CUERPO_IF
; 

CUERPO_IF:r_if EXPRESION BLOQUE  {$$ = new Iif($2,$3,@1.first_line,@1.first_column);} 
		|r_if EXPRESION BLOQUE r_else BLOQUE {$$ = new If_Else($2,$3,$5,@1.first_line,@1.first_column);}
;


ELSE_IF:ELSE_IF I_ELSE_IF 
	|I_ELSE_IF
;

I_ELSE_IF:r_else r_if EXPRESION BLOQUE
;

SWITCH:r_switch parentesis_a identificador parentesis_c llave_a CASE llave_c 
;

CASE:CASE I_CASE
	|I_CASE
;

I_CASE: r_case TIPO_LITERAL dos_puntos INTRUCCIONES r_break punto_coma
	|default dos_puntos INTRUCCIONES 
;

FOR:r_for parentesis_a ASIG_FOR parentesis_c BLOQUE
;

ASIG_FOR:TIPO_DATO EXPRESION punto_coma EXPRESION punto_coma EXPRESION
	|EXPRESION punto_coma EXPRESION punto_coma EXPRESION
;

WHILE:r_while EXPRESION  BLOQUE {$$ = new IWhile($2,$3,@1.first_line,@1.first_column);}
;

DO_WHILE:r_do BLOQUE r_while EXPRESION punto_coma
;

MET_FUN:r_void identificador parentesis_a parentesis_c BLOQUE
	|r_void identificador parentesis_a ASIG_PARAMETROS parentesis_c BLOQUE
	|TIPO_DATO identificador parentesis_a parentesis_c BLOQUE
	|TIPO_DATO identificador parentesis_a ASIG_PARAMETROS parentesis_c BLOQUE
;

LLAMADA:r_call identificador parentesis_a parentesis_c punto_coma
	|r_call identificador parentesis_a PARAMETROS parentesis_c  punto_coma
;

ASIG_PARAMETROS: ASIG_PARAMETROS coma A_P
	|A_P
;

A_P	: TIPO_DATO identificador
;	

PARAMETROS	
	: PARAMETROS coma identificador
	| identificador
;

BLOQUE
	:llave_a INTRUCCIONES llave_c		{$$ =  new Bloque($2,@1.first_line,@1.first_column);}
;


TIPO_DATO
	:r_int  	{$$=Type.INT}
	|r_double	{$$=Type.DOUBLE}
	|r_string	{$$=Type.STRING}
	|r_char		{$$=Type.CHAR}
	|r_bool		{$$=Type.BOOLEAN}
;

INCREMENTOS:identificador incremento punto_coma	{$$ =  new InDe(1,$1,OpcionesInDe.MAMA,@1.first_line,@1.first_column);}
			|identificador decremento punto_coma	{$$ =  new InDe(1,$1,OpcionesInDe.MEME,@1.first_line,@1.first_column);}
			|incremento identificador punto_coma 	{$$ =  new InDe(0,$2,OpcionesInDe.MAMA,@1.first_line,@1.first_column);}
			|decremento identificador punto_coma	{$$ =  new InDe(0,$2,OpcionesInDe.MEME,@1.first_line,@1.first_column);}
;

FUNCIONES_NATIVAS
	:r_println parentesis_a EXPRESION parentesis_c punto_coma 	{$$ = new Imprimir(1,$3,@1.first_line,@1.first_column);}
	|r_println parentesis_a MET_FUN parentesis_c punto_coma		
	|r_println parentesis_a parentesis_c punto_coma				{$$ = new Imprimir(2,null,@1.first_line,@1.first_column);}
	|r_print parentesis_a  EXPRESION parentesis_c punto_coma	{$$ = new Imprimir(0,$3,@1.first_line,@1.first_column);}	
	|r_print parentesis_a  MET_FUN parentesis_c punto_coma
	|r_typeof parentesis_a EXPRESION parentesis_c punto_coma
;

EXPRESION:EXPRESION or EXPRESION		{$$ = new Logica($1,$3,OpcionesLogicas.OR,@1.first_line,@1.first_column)}
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
	|identificador						{$$ = new Acces($1,@1.first_line,@1.first_column);} 
	|TIPO_LITERAL						{$$ = $1}	
	      	          	
	;

TIPO_LITERAL:entero						{$$ = new Literal($1,Type.INT,		@1.first_line,@1.first_column)}  
 	|decimal       						{$$ = new Literal($1,Type.DOUBLE,	@1.first_line,@1.first_column)}                 								 
	|cadena								{$$ = new Literal($1,Type.STRING,	@1.first_line,@1.first_column)}
	|caracter							{$$ = new Literal($1,Type.CHAR,		@1.first_line,@1.first_column)}
	|boolean							{$$ = new Literal($1,Type.BOOLEAN,	@1.first_line,@1.first_column)}
;
