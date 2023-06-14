'use strict'

export const getDoacao = async () => {
    const url = 'https://dreamchock-backend.onrender.com/v1/dream-chock/api/all-data-donation/rh';

    const response = await fetch(url);
    const data = await response.json();
  
    return data.message;
};





