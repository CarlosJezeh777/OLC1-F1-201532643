export class Errores{
    constructor(
        public descripcion: string,
        public tipo: string,
        public linea: number,
        public columna: number,
    ){

    }
} 