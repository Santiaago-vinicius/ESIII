interface Publicavel {
    exibir(): void;
    getAutor(): Perfil;
  }
  
  class Perfil {
    private id: number;
    private nomeUsuario: string;
  
    constructor(id: number, nomeUsuario: string) {
      this.id = id;
      this.nomeUsuario = nomeUsuario;
    }
    getNomeUsuario(): string{
        return this.nomeUsuario
    }
  
    // Métodos getters e setters necessários
  }
  
  class Postagem implements Publicavel {
    private id: string;
    private autor: Perfil;
    private conteudo: string;
    private reacoes: Reacao[];
    private comentarios: Comentario[];
  
    constructor(id: string, autor: Perfil, conteudo: string) {
      this.id = id;
      this.autor = autor;
      this.conteudo = conteudo;
      this.reacoes = [];
      this.comentarios = [];
    }
  
    exibir(): void {
      console.log(`Postagem [${this.id}] de ${this.autor.getNomeUsuario()}: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
  
    adicionarReacao(reacao: Reacao): void {
      this.reacoes.push(reacao);
    }
  
    adicionarComentario(comentario: Comentario): void {
      this.comentarios.push(comentario);
    }

    getId() : string{
        return this.id
    }
  
    // Outros métodos
  }
  
  class Reacao implements Publicavel {
    private tipoReacao: string;
    private postagem: Postagem;
  
    constructor(tipoReacao: string, postagem: Postagem) {
      this.tipoReacao = tipoReacao;
      this.postagem = postagem;
    }
  
    exibir(): void {
      console.log(`Reação [${this.tipoReacao}] de ${this.postagem.getAutor().getNomeUsuario()} na postagem ${this.postagem.getId()}`);
    }
  
    getAutor(): Perfil {
      return this.postagem.getAutor();
    }
  
    // Outros métodos
  }
  
  class Comentario implements Publicavel {
    private postagemOriginal: Postagem;
    private autor: Perfil;
    private conteudo: string;
  
    constructor(autor: Perfil, conteudo: string, postagemOriginal: Postagem) {
      this.autor = autor;
      this.conteudo = conteudo;
      this.postagemOriginal = postagemOriginal;
    }
  
    exibir(): void {
      console.log(`Comentário de ${this.autor.getNomeUsuario()} em resposta a postagem [${this.postagemOriginal.getId()}]: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
  
    // Outros métodos
  }


const perfil1 = new Perfil(1, "usuario1")
const perfil2 = new Perfil(2, "usuario2")

const postagem = new Postagem("1", perfil1, "Conteúdo da postagem");
const reacao = new Reacao("Curtida", postagem)
const comentario = new Comentario(perfil2, "Comentário na postagem", postagem)

postagem.adicionarReacao(reacao)
postagem.adicionarComentario(comentario)

postagem.exibir()
reacao.exibir()
comentario.exibir()
  