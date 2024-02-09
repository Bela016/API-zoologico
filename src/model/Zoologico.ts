import { Atracao } from "./Atração";


export class Zoologico {
    private nome: string;
    private lista_de_atracao: Array <Atracao>;

    constructor(
        _nome: string,
        _lista_de_atracao: Array <Atracao>,) {
        this.nome = _nome;
        this.lista_de_atracao = _lista_de_atracao;
    }
    public getLista_Atracao(): Array<Atracao> {
        return this.lista_de_atracao;
    } 
    // define a lista de de Atracao
    //@param _lista_de_atracao a ser atribuida
    public setLista_Atracao(lista_de_atracao: Array<Atracao>): void {
        this.lista_de_atracao = lista_de_atracao;
    }
    // retorna o nome do Atracao
    // @returns o nome da Atracao 
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
}
