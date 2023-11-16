//EXEMPLO DOS ANIMAIS
interface EmitirSom {
    emitirSom(): string;
}

interface Movimento {
    mover(): string;
}

class SomLatido implements EmitirSom {
    emitirSom(): string {
        return "Au au";
    }
}

class SomMiado implements EmitirSom {
    emitirSom(): string {
        return "Miau";
    }
}

class Correr implements Movimento {
    mover(): string {
        return "Correndo";
    }
}

class Andar implements Movimento {
    mover(): string {
        return "Andando";
    }
}

class Cachorro {
    private som: EmitirSom;
    private movimento: Movimento;

    constructor() {
        this.som = new SomLatido();
        this.movimento = new Correr();
    }

    emitirSom(): string {
        return this.som.emitirSom();
    }

    mover(): string {
        return this.movimento.mover();
    }
}

class Gato {
    private som: EmitirSom;
    private movimento: Movimento;

    constructor() {
        this.som = new SomMiado();
        this.movimento = new Andar();
    }

    emitirSom(): string {
        return this.som.emitirSom();
    }

    mover(): string {
        return this.movimento.mover();
    }
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

console.log(meuCachorro.emitirSom()); 
console.log(meuCachorro.mover()); 

console.log(meuGato.emitirSom()); 
console.log(meuGato.mover()); 
