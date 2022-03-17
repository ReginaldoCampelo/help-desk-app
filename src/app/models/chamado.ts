export interface Chamado {
    id?: any;
    dataAbertura?: string;
    dataFechamento?: string;
    prioridade?: string;
    status: string;
    descricao: string;
    tecnico: any;
    cliente: any;
    nomeCliente: string;
    nomeTecnico: string;
}