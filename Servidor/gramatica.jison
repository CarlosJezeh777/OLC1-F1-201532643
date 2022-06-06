/* Definición Léxica */
%lex

%options case-insensitive

%%

"Evaluar"           return 'REVALUAR';

"\""                 return 'COMILLASDOBLES';
"\\"                 return 'BARRAINVERTIDA';
"\n"                 return 'NUEVALINEA';
"\r"                 return 'RETORNO';
"\t"                 return 'TABULACION';

"int"           	return 'INT';
"double"       		return 'DOUBLE';
"char"           	return 'CHAR';
"boolean"           return 'BOOL';
"String"           	return 'STRING';
"const"           	return 'CONST';
"if"           		return 'IF';
"else"           	return 'ELSE';
"switch"           	return 'SWITCH';
"case"           	return 'CASE';
"default"           return 'DEFAULT';
"for"           	return 'FOR';
"while"           	return 'WHILE';
"do"           		return 'DO';
"break"           	return 'BREAK';
"continue"          return 'CONTINUE';
"void"           	return 'VOID';
"return"           	return 'RETURN';
"call"           	return 'CALL';
"Println"           return 'PRINTLN';
"Print"           	return 'PRINT';
"Typeof"           	return 'TYPEOF';
"true"				return 'RTRUE'
"false"				return 'RFALSE'

">="                 return 'MAYORIGUAL';
"<="                 return 'MENORIGUAL';
"=="                 return 'IGUALQUE';
"!="                 return 'DIFERENTEQUE';
">"                 return 'MAYORQUE';
"<"                 return 'MENORQUE';

"||"                 return 'OR';
"&&"                 return 'AND';
"^"                 return 'XOR';
"!"                 return 'NOT';

"="                 return 'IGUAL';
";"                 return 'PTCOMA';
":"                 return 'DOSPUNTOS';
"("                 return 'ABRIRPARENTESIS';
")"                 return 'CERRARPARENTESIS';
"{"                 return 'ABRIRLLAVES';
"}"                 return 'CERRARLLAVES';

"++"                return 'INCREMENTO';
"--"                return 'DECREMENTO';
"**"                return 'POTENCIA';
"+"                 return 'MAS';
"-"                 return 'MENOS';
"*"                 return 'POR';
"/"                 return 'DIVIDIDO';
"%"                 return 'MODULO';


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

[0-9]+("."[0-9]+)?\b    return 'DECIMAL';
[0-9]+\b                return 'ENTERO';
([a-zA-Z])[a-zA-Z0-9_]*	 return 'IDENTIFICADOR';

<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */

%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS

%start ini

%% /* Definición de la gramática */

ini
	: cuerpo EOF
;

cuerpo
	:declaracion_variables cuerpo 
	|declaracion_variables
	|condicion_if cuerpo
	|condicion_if
	|error {console.error('Este es un error sintactico: ' + yytext + ', en la linea: '+ this._$.first_line+', en la columna: '+this._$.first_column);}
;

declaracion_variables
	: tipo_dato IDENTIFICADOR IGUAL expresion PTCOMA
	| CONST declaracion_variables
;

asignacion
	: IDENTIFICADOR IGUAL IDENTIFICADOR
	|IDENTIFICADOR IGUAL expresion
;

condicion_if
	: cuerpo_if else_if
	|cuerpo_if condicion_else
	|cuerpo_if else_if condicion_else
	|cuerpo_if
; 

cuerpo_if
	:IF ABRIRPARENTESIS expresion CERRARPARENTESIS ABRIRLLAVES cuerpo CERRARLLAVES
;

condicion_else
	: ELSE ABRIRLLAVES cuerpo CERRARLLAVES
;

else_if
	:else_if ELSE IF ABRIRPARENTESIS  CERRARPARENTESIS ABRIRLLAVES  cuerpo CERRARLLAVES 
	|ELSE IF ABRIRPARENTESIS  CERRARPARENTESIS ABRIRLLAVES  cuerpo CERRARLLAVES
;

condicion_switch
	: SWITCH ABRIRPARENTESIS CERRARPARENTESIS ABRIRLLAVES condicion_case CERRARLLAVES 
;

condicion_case 
	: condicion_case CASE DOSPUNTOS cuerpo BREAK PTCOMA
;

bucle_for
	:FOR ABRIRPARENTESIS asig_for CERRARPARENTESIS ABRIRLLAVES cuerpo CERRARLLAVES
;

asig_for
	:tipo_dato IDENTIFICADOR IGUAL tipo_expresion PTCOMA IDENTIFICADOR expresion_relacional tipo_expresion PTCOMA IDENTIFICADOR incrementales
	|IDENTIFICADOR IGUAL tipo_expresion PTCOMA IDENTIFICADOR expresion_relacional tipo_expresion PTCOMA IDENTIFICADOR incrementales
;

bucle_while
	:WHILE ABRIRPARENTESIS CERRARPARENTESIS ABRIRLLAVES cuerpo CERRARLLAVES
;

do_while
	:DO ABRIRLLAVES cuerpo  CERRARLLAVES WHILE ABRIRPARENTESIS CERRARPARENTESIS PTCOMA
;

metodo_funcion
	:VOID IDENTIFICADOR ABRIRPARENTESIS CERRARPARENTESIS ABRIRLLAVES cuerpo  CERRARLLAVES
	|tipo_dato IDENTIFICADOR ABRIRPARENTESIS CERRARPARENTESIS ABRIRLLAVES cuerpo  CERRARLLAVES
;

llamada_m_f
	: CALL IDENTIFICADOR ABRIRPARENTESIS CERRARPARENTESIS PTCOMA
;

bloque_instrucciones
	:ABRIRLLAVES cuerpo CERRARLLAVES
;

funciones_nativas
	:PRINTLN ABRIRPARENTESIS CERRARPARENTESIS
	|PRINT ABRIRPARENTESIS CERRARPARENTESIS
	|TYPEOF ABRIRPARENTESIS CERRARPARENTESIS
;

tipo_dato 
	:INT
	|DOUBLE
	|STRING 
	|CHAR
	|BOOL
;

expresiones_logicas
	:AND
	|OR
	|XOR
	|NOT
;

tipo_expresion
	:ENTERO
	|IDENTIFICADOR
	|DECIMAL
;

expresiones_aritmeticas
	:MAS
	|MENOS
	|DIVIDIDO
	|POR
	|POTENCIA
	|MODULO
;

expresion_relacional
	:MAYORIGUAL
	|MENORIGUAL
	|MAYORQUE
	|MENORQUE
	|IGUALQUE
	|DIFERENTEQUE
;

incrementales
	:INCREMENTO
	|DECREMENTO
;

expresion
	: MENOS expresion %prec UMENOS  { $$ = $2 *-1; }
	| expresion MAS expresion       { $$ = $1 + $3; }
	| expresion MENOS expresion     { $$ = $1 - $3; }
	| expresion POR expresion       { $$ = $1 * $3; }
	| expresion DIVIDIDO expresion  { $$ = $1 / $3; }
	| ENTERO                        { $$ = Number($1); }
	| DECIMAL                       { $$ = Number($1); }
	| PARIZQ expresion PARDER       { $$ = $2; }
;