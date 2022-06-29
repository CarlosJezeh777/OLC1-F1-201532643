export enum AritmeticasOptions{
    MAS,
    MENOS,
    MULTIPLICAR,
    DIVIDIR,
    POTENCIA,
    MODULO,
    NEGACION
}

export function getSimbolo(objeto: AritmeticasOptions): string {
    switch (objeto) {
        case 0:
            return "+"
        case 1:
            return "-"
        case 2:
            return "*"
        case 3:
            return "/"
        case 5:
            return "%"
        case 4:
            return "**"
        default:
            return ""
    }
}