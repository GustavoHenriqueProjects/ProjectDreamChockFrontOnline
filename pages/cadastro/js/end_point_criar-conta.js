'use strict'

export const criarContaFuncionario = async (cadastro) => {
    const url = 'https://dreamchock-backend.onrender.com/v1/dream-chock/api/create-account/employee';
  
    const cadastroUsuario = {
      method: 'POST',
      body: JSON.stringify(cadastro),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const enviarCadastro = await fetch(url, cadastroUsuario);
    const respostaJson = await enviarCadastro.json(); // Converter para JSON
  
    return respostaJson;
  };
  