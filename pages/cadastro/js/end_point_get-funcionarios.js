'use strict'

export const getFuncionarios = async () => {
    const url = 'https://dreamchock-backend.onrender.com/v1/dream-chock/api/all-employee/rh';

    const response = await fetch(url);
    const data = await response.json();
  
    return data.message;
};
