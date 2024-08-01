function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    if (cpf == '' || cpf == null || cpf.length < 11) {
        return '';        
    }

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return 'O número do CPF não é válido';
    }

    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    primeiroDigito = primeiroDigito === 10 ? 0 : primeiroDigito;

    if (primeiroDigito !== parseInt(cpf[9])) {
        return 'O número do CPF não é válido';
    }

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    segundoDigito = segundoDigito === 10 ? 0 : segundoDigito;
    
    if (segundoDigito !== parseInt(cpf[10])) {
        return 'O número do CPF não é válido';
    } else {
        return 'O número do CPF é válido';
    }
}

module.exports = validarCPF;
