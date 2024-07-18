function calcularDigitoVerificador(numero) {
    
    // Verifica se o valor recebido é uma string 
    if  (typeof numero !== 'string') {
       numeroString = numero.toString();
    } else {
        numeroString = numero;
    }

    // Remove espaços em branco
    numeroString = numeroString.replace(/\s+/g, '');
    console.log(numeroString);

    // Armazena o valor do processo (NNNNNNN)
    const processo = numeroString.slice(0, 7)
    console.log(processo);

    // Concatena o ano com poder judiciário e tribunal (AAAAJTR)
    const anoConcatenado = numeroString.slice(7, 14);
    console.log(anoConcatenado);

    // Concatena o unidade organica + "00" (OOOO00)
    //const unidadeOrganica = numeroString.slice(14, 18) + "00";
    const unidadeOrganica = numeroString.slice(14, 18);
    console.log(unidadeOrganica);

    // Converte para um número inteiro
   const processoInt = BigInt(processo);
    const anoConcatenadoInt = BigInt(anoConcatenado);
    const unidadeOrganicaInt = BigInt(unidadeOrganica);

    const R1 = processoInt % BigInt(97);
    console.log(R1);

    const R2 = BigInt(R1 + anoConcatenadoInt) % BigInt(97);
    console.log(R2);

    const R3 = BigInt(R2 + unidadeOrganicaInt) % BigInt(97);
    console.log(R3);

    // Calcula o módulo 97
    //const resto = processoInt % BigInt(97);
    //const digitoVerificador = (BigInt(97) - resto) % BigInt(97);
    const digitoVerificador = BigInt(98) - R3;

    // Formata o dígito verificador com dois dígitos
    return String(digitoVerificador).padStart(2, '0');
}

module.exports = calcularDigitoVerificador;

console.log(calcularDigitoVerificador('180740020244036301'))
