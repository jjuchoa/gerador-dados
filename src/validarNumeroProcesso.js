function validarNumeroProcesso(numeroProcesso) {
    const calcularDigitoVerificador = require('./calculoDV');
    
    // Expressão regular para validar o formato do número de processo
    const regex = /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/; 
    
    if (regex.test(numeroProcesso)==true) {
        console.log('regex = true')
        if (calcularDigitoVerificador(numeroProcesso)==numeroProcesso.slice(8, 10)) {
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
    } if (regex.test(numeroProcesso)==false && numeroProcesso.length > 18) {
        console.log('regex = false')
        numeroSemDV = numeroProcesso.replace(/[\.\/\.\/\.\/\-]/g, '', '');
        numeroSemDV = numeroSemDV.slice(0, 7) + numeroSemDV.slice(9, 20);
        if (calcularDigitoVerificador(numeroSemDV) == numeroProcesso.slice(7, 9)) {
            if (numeroProcesso.slice(9, 13) <= new Date().getFullYear() && numeroProcesso.slice(9, 13) >= 1995) {
                if (numeroProcesso.slice(13, 14) <= 9 && numeroProcesso.slice(13, 14) > 0) {
                    if (numeroProcesso.slice(14, 16) <= 90) {
                        if (numeroProcesso.slice(16, 20) <= 8999 && numeroProcesso.slice(16, 20) >= 1) {
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
        false;        
    }
}
