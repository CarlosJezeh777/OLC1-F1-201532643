import { RelationalOperator } from "typescript"

export enum OpcionRelacional{
        MAYORQUE,
        MENORQUE,
        MAYORIGUAL,
        MENORIGUAL,
        IGUALQUE,
        NOIGUAL,
}

export function getSimbolo(objeto: OpcionRelacional): string {
        switch (objeto) {
            case 4:
                return "=="
            case 5:
                return "!="
            case 1:
                return "\\<"
            case 3:
                return "\\<="
            case 0:
                return "\\>"
            case 2:
                return "\\>="
            default:
                return ""
        }
    }