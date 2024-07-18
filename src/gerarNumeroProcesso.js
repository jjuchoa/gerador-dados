function gerarNumeroProcesso(numero) {
    const calcularDigitoVerificador = require('./calculoDV');
    const data = new Date();

    const NNNNNNN = String(new Date().getDate()).padStart(2, '0')+String(new Date().getMonth()).padStart(2, '0')+String(numero);
    const AAAA = new Date().getFullYear();
    const J = '4';
    const TR = '03';
    const OOOO = '6301';
    const numeroSemDD = NNNNNNN + AAAA + J + TR + OOOO;
    const DD = calcularDigitoVerificador(numeroSemDD);
    const numeroComDD = NNNNNNN + DD + AAAA + J + TR + OOOO;
    
    return "Numero Processo Judicial: "+`${NNNNNNN}-${DD}.${AAAA}.${J}.${TR}.${OOOO}`+" | "+numeroComDD;
}

module.exports = gerarNumeroProcesso;

/*for (let i = 400; i < 405; i++) {
    console.log(gerarNumeroProcesso(i))
}*/