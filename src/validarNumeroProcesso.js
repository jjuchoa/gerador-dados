function validarNumeroProcesso(numeroProcesso) {
    const calcularDigitoVerificador = require('./calculoDV');
    
    // Expressão regular para validar o formato do número de processo
    const regex = /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/; 
    
    if (regex.test(numeroProcesso)==true) {
        if (calcularDigitoVerificador(numeroProcesso.slice(0, 7))==numeroProcesso.slice(8, 10)) {
            if (numeroProcesso.slice(11, 15) <= new Date().getFullYear() && numeroProcesso.slice(11, 15) >= 1995) {
                if (numeroProcesso.slice(16, 17) <= 9 && numeroProcesso.slice(16, 17) > 0) {
                    if (numeroProcesso.slice(18, 20) <= 90) {
                        if (numeroProcesso.slice(21, 25) <= 8999 && numeroProcesso.slice(21, 25) >= 1) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }    
    } else {
        return regex.test(numeroProcesso);        
    }
}

module.exports = validarNumeroProcesso;

//console.log(validarNumeroProcesso('1606400-01.2024.4.03.6301'));