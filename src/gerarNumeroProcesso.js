function gerarNumeroProcesso(numero, quantidade) {
    const calcularDigitoVerificador = require('./calculoDV');
    var numeroGerado = [];

    if (numero == null || isNaN(numero) == true || numero == 1) {
        numeroGerado[0] = 'Os campos "Faixa" e "Quantidade" devem ser preenchidos!';
        return numeroGerado;
    } else {
        var faixa = numero;
        for (var i = 0; i < quantidade; i++){            
            const NNNNNNN = String(new Date().getDate()).padStart(2, '0')+String(new Date().getMonth()).padStart(2, '0')+String(faixa);
            const AAAA = new Date().getFullYear();
            const J = '4';
            const TR = '03';
            const OOOO = '6301';
            const numeroSemDD = NNNNNNN + AAAA + J + TR + OOOO;
            const DD = calcularDigitoVerificador(numeroSemDD);
            const numeroComDD = NNNNNNN + DD + AAAA + J + TR + OOOO;
            
            numeroGerado[i] = "Numero Processo Judicial: "+String(`${NNNNNNN}-${DD}.${AAAA}.${J}.${TR}.${OOOO}`)+" | "+numeroComDD;
            faixa++;
        }
        return numeroGerado;
    }
}

module.exports = gerarNumeroProcesso;
