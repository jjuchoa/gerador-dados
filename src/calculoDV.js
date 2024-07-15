function calcularDigitoVerificador(numero) {
    // Verifica se o número é uma string
    if (typeof numero !== 'string') {
        throw new Error('O número deve ser uma string.');
    }

    // Remove espaços em branco
    numero = numero.replace(/\s+/g, '');

    // Concatena o número com "00"
    const numeroConcatenado = numero + '00';

    // Converte para um número inteiro
    const numeroInt = BigInt(numeroConcatenado);

    // Calcula o módulo 97
    const resto = numeroInt % BigInt(97);
    const digitoVerificador = (BigInt(97) - resto) % BigInt(97);

    // Formata o dígito verificador com dois dígitos
    return String(digitoVerificador).padStart(2, '0');
}

module.exports = calcularDigitoVerificador;

