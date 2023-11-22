// Configuração do Moment.js para usar arquivos de localização
import moment from 'moment';
moment.updateLocale('pt-br', null);  // Limpa as configurações de localização existentes
moment.locale('pt-br');  // Define o local padrão para 'en'

    
    alert(moment().format("HH:mm:ss"))
