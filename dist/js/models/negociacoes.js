export class Negociacoes {
    constructor() {
        // Negociacao[] = Array<Negociacao>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // readonly Negociacao[] = ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
