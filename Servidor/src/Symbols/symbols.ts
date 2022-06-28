import { Type } from "./type";

export class Symbolos{
    constructor(
        public value: any,
        public id: string,
        public type: Type,
        public editable: boolean
    ){
        
    }
}

export class Symbol_Vector{
    constructor(
        public value: any,
        public id: string,
        public type: Type,
        public index: number, 
        public dimension: number
    ){
        
    }
}