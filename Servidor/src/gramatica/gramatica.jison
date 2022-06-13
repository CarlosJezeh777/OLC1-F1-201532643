/* Definición Léxica */
%{
	const {Declaracion} = require('../instrucciones/declaraciones');
	const {Literal} = require('../Expresiones/Literales');
	const {Type} = require('../Symbols/type')
	const {Asignar} = require('../instrucciones/asignar');
	const {Aritmeticas} = require('../Expresiones/Aritmeticas');
	const {AritmeticasOptions} = require('../Expresiones/aritmeticasOpc');
%}

%lex
%option case-insensitive;

%%


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

[0-9]+("."[0-9]+)?		{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'decimal';
						}
[0-9]+                	{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'entero';
						}
([a-zA-Z])[a-zA-Z0-9_]*	{
							//console.log("Se reconocio el lexema: " + yytext);
							return 'identificador';
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

INTRUCCION:DVARIABLES {$$=$1}
	|ASIGNACION {$$ = $1}
	|IF
	|SWITCH
	|FOR
	|WHILE
	|DO_WHILE
	|MET_FUN
	|LLAMADA
	|BLOQUE
	|FUNCIONES_NATIVAS
;

DVARIABLES: TIPO_DATO EXPRESION punto_coma {$$ = new Declaracion($1,$2[0],$2[1],@1.first_line,@1.first_column);}
	|r_const TIPO_DATO EXPRESION punto_coma
;

ASIGNACION: EXPRESION punto_coma	{$$ = new Asignar($1[0],$1[1],@1.first_line,@1.first_column);}		
;

IF:CUERPO_IF ELSE_IF
	|CUERPO_IF ELSE_IF ELSE
	|CUERPO_IF ELSE
	|CUERPO_IF
; 

CUERPO_IF:r_if parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c
;

ELSE:r_else llave_a INTRUCCIONES llave_c
;

ELSE_IF:ELSE_IF I_ELSE_IF 
	|I_ELSE_IF
;

I_ELSE_IF:r_else r_if parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c 
;

SWITCH:r_switch parentesis_a  EXPRESION parentesis_c llave_a CASE llave_c 
;

CASE:CASE I_CASE
	|I_CASE
;

I_CASE: r_case dos_puntos INTRUCCIONES r_break punto_coma
	|default dos_puntos INTRUCCIONES 
;

FOR:r_for parentesis_a ASIG_FOR parentesis_c llave_a INTRUCCIONES  llave_c
;

ASIG_FOR:TIPO_DATO EXPRESION punto_coma EXPRESION punto_coma EXPRESION
	|EXPRESION punto_coma EXPRESION punto_coma EXPRESION
;

WHILE:r_while parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c
;

DO_WHILE:r_do llave_a INTRUCCIONES llave_c  r_while parentesis_a EXPRESION parentesis_c punto_coma
;

MET_FUN:r_void identificador parentesis_a parentesis_c llave_a INTRUCCIONES  llave_c
	|r_void identificador parentesis_a ASIG_PARAMETROS parentesis_c llave_a INTRUCCIONES  llave_c
	|TIPO_DATO identificador parentesis_a parentesis_c llave_a INTRUCCIONES llave_c
	|TIPO_DATO identificador parentesis_a ASIG_PARAMETROS parentesis_c llave_a INTRUCCIONES llave_c
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
	:llave_a INTRUCCIONES llave_c
;


TIPO_DATO
	:r_int  	{$$=Type.INT}
	|r_double	{$$=Type.DOUBLE}
	|r_string	{$$=Type.STRING}
	|r_char		{$$=Type.CHAR}
	|r_bool		{$$=Type.BOOLEAN}
;



FUNCIONES_NATIVAS
	:r_println parentesis_a EXPRESION parentesis_c punto_coma
	|r_println parentesis_a MET_FUN parentesis_c punto_coma
	|r_println parentesis_a parentesis_c punto_coma
	|r_print parentesis_a  EXPRESION parentesis_c punto_coma
	|r_print parentesis_a  MET_FUN parentesis_c punto_coma
	|r_print parentesis_a  parentesis_c punto_coma
	|r_typeof parentesis_a EXPRESION parentesis_c punto_coma
;

EXPRESION:incremento EXPRESION
	|decremento EXPRESION
	|EXPRESION incremento
	|EXPRESION decremento
	|EXPRESION coma identificador
	|EXPRESION igual EXPRESION 			{$$ = [$1,$3]}
	|EXPRESION or EXPRESION
	|not EXPRESION
	|EXPRESION xor EXPRESION
	|EXPRESION and EXPRESION
	|EXPRESION mayor EXPRESION
	|EXPRESION mayor_igual EXPRESION
	|EXPRESION menor EXPRESION
	|EXPRESION menor_igual EXPRESION
	|EXPRESION igual_que EXPRESION
	|EXPRESION no_igual EXPRESION
	|EXPRESION mod EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MODULO,@1.first_line,@1.first_column)}
	|EXPRESION potencia EXPRESION 		{$$ = new Aritmeticas($1,$3,AritmeticasOptions.POTENCIA,@1.first_line,@1.first_column)}
	|EXPRESION suma EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MAS,@1.first_line,@1.first_column)}
	|EXPRESION resta EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MENOS,@1.first_line,@1.first_column)}
	|EXPRESION por EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.MULTIPLICAR,@1.first_line,@1.first_column)}
	|EXPRESION div EXPRESION			{$$ = new Aritmeticas($1,$3,AritmeticasOptions.DIVIDIR,@1.first_line,@1.first_column)}
	|decimal       						{$$ = new Literal($1,Type.DOUBLE,	@1.first_line,@1.first_column)}                 					
	|entero								{$$ = new Literal($1,Type.INT,		@1.first_line,@1.first_column)}
	|identificador			
	|cadena								{$$ = new Literal($1,Type.STRING,	@1.first_line,@1.first_column)}
	|caracter							{$$ = new Literal($1,Type.CHAR,		@1.first_line,@1.first_column)}
	|boolean			            	{$$ = new Literal($1,Type.BOOLEAN,	@1.first_line,@1.first_column)}          	
	| parentesis_a EXPRESION parentesis_c       						
;

