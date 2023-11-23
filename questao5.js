var Perfil = /** @class */ (function () {
    function Perfil(id, nomeUsuario) {
        this.id = id;
        this.nomeUsuario = nomeUsuario;
    }
    Perfil.prototype.getNomeUsuario = function () {
        return this.nomeUsuario;
    };
    return Perfil;
}());
var Postagem = /** @class */ (function () {
    function Postagem(id, autor, conteudo) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
        this.reacoes = [];
        this.comentarios = [];
    }
    Postagem.prototype.exibir = function () {
        console.log("Postagem [".concat(this.id, "] de ").concat(this.autor.getNomeUsuario(), ": ").concat(this.conteudo));
    };
    Postagem.prototype.getAutor = function () {
        return this.autor;
    };
    Postagem.prototype.adicionarReacao = function (reacao) {
        this.reacoes.push(reacao);
    };
    Postagem.prototype.adicionarComentario = function (comentario) {
        this.comentarios.push(comentario);
    };
    Postagem.prototype.getId = function () {
        return this.id;
    };
    return Postagem;
}());
var Reacao = /** @class */ (function () {
    function Reacao(tipoReacao, postagem) {
        this.tipoReacao = tipoReacao;
        this.postagem = postagem;
    }
    Reacao.prototype.exibir = function () {
        console.log("Rea\u00E7\u00E3o [".concat(this.tipoReacao, "] de ").concat(this.postagem.getAutor().getNomeUsuario(), " na postagem ").concat(this.postagem.getId()));
    };
    Reacao.prototype.getAutor = function () {
        return this.postagem.getAutor();
    };
    return Reacao;
}());
var Comentario = /** @class */ (function () {
    function Comentario(autor, conteudo, postagemOriginal) {
        this.autor = autor;
        this.conteudo = conteudo;
        this.postagemOriginal = postagemOriginal;
    }
    Comentario.prototype.exibir = function () {
        console.log("Coment\u00E1rio de ".concat(this.autor.getNomeUsuario(), " em resposta a postagem [").concat(this.postagemOriginal.getId(), "]: ").concat(this.conteudo));
    };
    Comentario.prototype.getAutor = function () {
        return this.autor;
    };
    return Comentario;
}());
var perfil1 = new Perfil(1, "usuario1");
var perfil2 = new Perfil(2, "usuario2");
var postagem = new Postagem("1", perfil1, "Conteúdo da postagem");
var reacao = new Reacao("Curtida", postagem);
var comentario = new Comentario(perfil2, "Comentário na postagem", postagem);
postagem.adicionarReacao(reacao);
postagem.adicionarComentario(comentario);
postagem.exibir();
reacao.exibir();
comentario.exibir();
