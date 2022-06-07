/* Definición Léxica */
%lex


%%


"\""                 return 'COMILLASDOBLES';
"\\"                 return 'BARRAINVERTIDA';
"\n"                 return 'NUEVALINEA';
"\r"                 return 'RETORNO';
"\t"                 return 'TABULACION';

"int"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_int';
					}
"double"       		{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_double';
					}
"char"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_char';
					}
"boolean"           {
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_bool';
					}
"string"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_string';
					}

"const"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_const';
					}
"if"           		{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_if';
					}
"else"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_else';
					}
"switch"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_switch';
					}
"case"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_case';
					}
"default"           {
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_default';
					}
"for"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_for';
					}
"while"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_while';
					}
"do"           		{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_do';
					}
"break"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_break';
					}
"continue"          {
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_continue';
					}
"void"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_void';
					}
"return"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_return';
					}
"call"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_call';
					}
"Println"           {
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_println';
					}
"Print"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_print';
					}
"Typeof"           	{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_typeof';
					}
"true"				{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_true';
					}
"false"				{
						console.log("Se reconocio el lexema: " + yytext);
						return 'r_false';
					}

">="                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'mayor_igual';
					}
"<="                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'menor_igual';
					}
"=="                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'igual_que';
					}
"!="                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'no_igual';
					}
">"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'mayor';
					}
"<"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'menor';
					}

"||"                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'or';
					}
"&&"                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'and';
					}
"^"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'xor';
					}
"!"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'not';
					}

"="                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'igual';
					}
";"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'punto_coma';
					}
","                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'coma';
					}
":"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'dos_puntos';
					}
"("                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'parentesis_a';
					}
")"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'parentesis_c';
					}
"{"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'llave_a';
					}
"}"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'llave_c';
					}

"++"                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'incremento';
					}
"--"                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'decremento';
					}

"**"                {
						console.log("Se reconocio el lexema: " + yytext);
						return 'potencia';
					}
"+"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'suma';
					}
"-"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'resta';
					}
"*"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'por';
					}
"/"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'div';
					}
"%"                 {
						console.log("Se reconocio el lexema: " + yytext);
						return 'mod';
					}

[0-9]+("."[0-9]+)?\b		return 'decimal';
[0-9]+\b                	return 'entero';
([a-zA-Z])[a-zA-Z0-9_]*		return 'identificador';


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */
%left 'or' 'xor' 'and'
%left 'mayor' 'mayor_igual' 'menor' 'menor_igual' 'igual_que' 'no_igual'
%left 'potencia' 'mod'
%left 'suma' 'resta'
%left 'por' 'div'

%start INIT

%% /* Definición de la gramática */

INIT
	: INTRUCCIONES EOF
;

INTRUCCIONES
	:INTRUCCION INTRUCCIONES
	|INTRUCCION
	|error {console.error('Este es un error sintactico: ' + yytext + ', en la linea: '+ this._$.first_line+', en la columna: '+this._$.first_column);}
;

INTRUCCION
	:DVARIABLES
	|IF
	|SWITCH
	|FOR
	|WHILE
	|DO_WHILE
	|MET_FUN
	|LLAMADA
	|BLOQUE
;

DVARIABLES
	: TIPO_DATO identificador igual TIPO_EXPRESION punto_coma
	| r_const TIPO_DATO identificador igual TIPO_EXPRESION punto_coma
;

ASIGNACION
	: identificador igual identificador punto_coma
	|identificador igual EXPRESION punto_coma
;

IF
	:CUERPO_IF ELSE_IF
	|CUERPO_IF ELSE_IF ELSE
	|CUERPO_IF ELSE
	|CUERPO_IF
; 

CUERPO_IF
	:r_if parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c
;

ELSE
	:r_else llave_a INTRUCCIONES llave_c
;

ELSE_IF
	:ELSE_IF I_ELSE_IF 
	|I_ELSE_IF
;

I_ELSE_IF
	: r_else r_if parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c 
;

SWITCH
	: r_switch parentesis_a parentesis_c llave_a CASE llave_c 
;

CASE
	:CASE I_CASE
	|I_CASE
;

I_CASE
	: r_case dos_puntos INTRUCCIONES r_break punto_coma
;

FOR
	:r_for parentesis_a ASIG_FOR parentesis_c llave_a INTRUCCIONES  llave_c
;

ASIG_FOR
	:TIPO_DATO identificador igual EXPRESION punto_coma identificador EXPRESION_RELACIONAL EXPRESION punto_coma identificador INCREMENTALES
	|identificador igual EXPRESION punto_coma identificador EXPRESION_RELACIONAL EXPRESION punto_coma identificador INCREMENTALES
;

WHILE
	:r_while parentesis_a EXPRESION parentesis_c llave_a INTRUCCIONES llave_c
;

DO_WHILE
	:r_do llave_a INTRUCCIONES llave_c  r_while parentesis_a EXPRESION parentesis_c punto_coma
;

MET_FUN
	:r_void identificador parentesis_a parentesis_c llave_a INTRUCCIONES  llave_c
	|TIPO_DATO identificador parentesis_a parentesis_c llave_a INTRUCCIONES llave_c
;

LLAMADA
	:r_call identificador parentesis_a parentesis_c punto_coma
;

BLOQUE
	:llave_a INTRUCCIONES llave_c
;


TIPO_EXPRESION
	: decimal
	|entero
	|r_true
	|r_false
;

TIPO_DATO
	:r_int
	|r_double
	|r_string
	|r_char
	|r_bool
;

EXPRESIONES_LOGICAS
	:or
	|xor
	|and
	|not
;


EXPRESIONES_ARITMETICAS
	:suma
	|resta
	|div
	|por
;

EXPRESION_RELACIONAL
	:mayor
	|mayor_igual
	|menor
	|menor_igual
	|igual_que
	|no_igual
;

INCREMENTALES
	:incremento
	|decremento
;

EXPRESION
	:EXPRESION or EXPRESION
	|EXPRESION xor EXPRESION
	|EXPRESION and EXPRESION
	|EXPRESION mayor EXPRESION
	|EXPRESION mayor_igual EXPRESION
	|EXPRESION menor EXPRESION
	|EXPRESION menor_igual EXPRESION
	|EXPRESION igual_que EXPRESION
	|EXPRESION no_igual EXPRESION
	|EXPRESION mod EXPRESION
	|EXPRESION potencia EXPRESION 
	|EXPRESION suma EXPRESION
	|EXPRESION resta EXPRESION
	|EXPRESION por EXPRESION
	|EXPRESION div EXPRESION
	|decimal                        					
	|entero		
	|identificador					                      
	| parentesis_a EXPRESION parentesis_c       						
;