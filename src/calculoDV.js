function calcularDigitoVerificador(numeroProcesso) {
    const regex = /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/;
    var numeroString = numeroProcesso;

    // Expressão regular para verificar se o proceso foi enviado com mascara
    if (regex.test(numeroProcesso)==true) {
        numeroString = numeroProcesso.replace(/[\.\/\.\/\.\/\-]/g, '', '');
        numeroString = numeroString.slice(0, 7) + numeroString.slice(9, 25);
    }  

    if (regex.test(numeroProcesso)==false && numeroProcesso.length > 18) {
        numeroString = numeroString.slice(0, 7) + numeroString.slice(9, 25);
    } 

    // Concatena o número do processo + "00" (OOOO+00)
    var numeroStringConcatenado = numeroString + "00";
    
    // Calcula o valor do dígito verificador
    var digitoVerificador = BigInt(98) - (BigInt(numeroStringConcatenado) % BigInt(97));

    // Formata o dígito verificador com dois dígitos
    return String(digitoVerificador).padStart(2, '0');
}

module.exports = calcularDigitoVerificador;
