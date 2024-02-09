/**
     * está exportando e definindo a classe animal com tres propriedades privadas
*/  
export class Animal {
   /**
     *  Atributo privado que armazena a informacoes do animal
*/  
    private nome: string;
    private idade: number;
    private genero: string;

 /**
     * Inicializa as propriedades nome, idade e genero com os valores fornecidos.
*/  
    constructor(_nome: string,
        _idade: number,
        _genero: string) {

        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
         // Método público que retorna o nome do animal.
    /**
     * Retorna o nome do animal.
     * 
     * @returns O nome do animal.
     */
    }

    public getNome(): string {
        return this.nome;
    }
     // Método público que define o nome do animal.
    /**
     * Define o nome do animal.
     * 
     * @param nome O novo nome do animal.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }
    // Método público que retorna a idade do animal.
    /**
     * Retorna a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }
    // Método público que define a idade do animal.
    /**
     * Define a idade do animal.
     * 
     * @param idade A nova idade do animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade;
    }
     // Método público que retorna o gênero do animal.
    /**
     * Retorna o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }
    // Método público que define o gênero do animal.
    /**
     * Define o gênero do animal.
     * 
     * @param genero O novo gênero do animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}