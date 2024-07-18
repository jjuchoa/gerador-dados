function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    primeiroDigito = primeiroDigito === 10 ? 0 : primeiroDigito;

    if (primeiroDigito !== parseInt(cpf[9])) {
        return false;
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    segundoDigito = segundoDigito === 10 ? 0 : segundoDigito;

    return segundoDigito === parseInt(cpf[10]);
}
<<<<<<< HEAD

module.exports = validarCPF;
=======
>>>>>>> 8f3b0a31c7dddc934662cecf2a459e48cfb8a13f
