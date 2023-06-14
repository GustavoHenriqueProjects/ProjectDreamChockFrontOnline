'use strict'

import { getFuncionarios } from './end_point_get-funcionarios.js'

const criaListaFuncionarios = (data) => {
    const funcionario = document.createElement('div');
    funcionario.classList.add('funcionario');
  
    const informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');
  
    const nome = document.createElement('p');
    nome.textContent = data.nome;
  
    const email = document.createElement('p');
    email.textContent = data.email;
    
    const linha = document.createElement('div');
    linha.classList.add('linha');
  
    funcionario.append(informacoes, linha);
    informacoes.append(nome, email);
  
    return funcionario;
  };
  
  const loadFuncionarios = async () => {
    const cards = await getFuncionarios();
    const funcionario = document.querySelector('.box-funcionario');
  
    const listaFuncionarios = cards.map(criaListaFuncionarios);
    funcionario.replaceChildren(...listaFuncionarios);
  };
  
  loadFuncionarios();