function gerarCPF() {
    const gerarDigitos = () => Math.floor(Math.random() * 10);
    
    // Gera os 9 primeiros dígitos do CPF
    let cpf = Array.from({ length: 9 }, gerarDigitos).join('');

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    primeiroDigito = primeiroDigito >= 10 ? 0 : primeiroDigito;
    cpf += primeiroDigito;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    segundoDigito = segundoDigito >= 10 ? 0 : segundoDigito;
    cpf += segundoDigito;

    // Formata o CPF no padrão xxx.xxx.xxx-xx
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
}

console.log(gerarCPF());
