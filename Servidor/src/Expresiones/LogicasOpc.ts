export enum OpcionesLogicas{
    OR,
    AND,
    NOT,
    XOR
}


export function getSimbol(objeto: OpcionesLogicas): string {
    switch (objeto) {
        case 0:
            return "\\|\\|"
        case 1:
            return "&&"
        case 2:
            return "!"
        case 3:
            return "^"
    }
    return ""
}