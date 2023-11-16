// EXEMPLO DOS VEICULOS
interface Movimento {
    mover(): string;
}

class MoverMotor implements Movimento {
    mover(): string {
        return "Usando motor";
    }
}

class MoverPedais implements Movimento {
    mover(): string {
        return "Pedalando";
    }
}

class MoverAviao implements Movimento {
    mover(): string {
        return "Voando";
    }
}

class Carro {
    private movimento: Movimento;

    constructor() {
        this.movimento = new MoverMotor();
    }

    mover(): string {
        return this.movimento.mover();
    }
}

class Bicicleta {
    private movimento: Movimento;

    constructor() {
        this.movimento = new MoverPedais();
    }

    mover(): string {
        return this.movimento.mover();
    }
}

class Aviao {
    private movimento: Movimento;

    constructor() {
        this.movimento = new MoverAviao();
    }

    mover(): string {
        return this.movimento.mover();
    }
}



const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();
const meuAviao = new Aviao();


console.log(meuCarro.mover()); 
console.log(minhaBicicleta.mover()); 
console.log(meuAviao.mover()); 


