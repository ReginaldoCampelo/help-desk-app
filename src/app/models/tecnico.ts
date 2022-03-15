import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Tecnico {
    id?: any;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;
}