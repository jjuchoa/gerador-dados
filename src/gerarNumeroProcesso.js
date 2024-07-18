function gerarNumeroProcesso(numero) {
    const calcularDigitoVerificador = require('./calculoDV');
    const data = new Date();

    const NNNNNNN = String(new Date().getDate()).padStart(2, '0')+String(new Date().getMonth()).padStart(2, '0')+String(numero);
    const DD = calcularDigitoVerificador(NNNNNNN);
    const AAAA = new Date().getFullYear();
    const J = '4';
    const TR = '03';
    const OOOO = '6301';
    
    return `${NNNNNNN}-${DD}.${AAAA}.${J}.${TR}.${OOOO}`;
}

module.exports = gerarNumeroProcesso;

/*for (let i = 400; i < 405; i++) {
    console.log(gerarNumeroProcesso(i))
}*/