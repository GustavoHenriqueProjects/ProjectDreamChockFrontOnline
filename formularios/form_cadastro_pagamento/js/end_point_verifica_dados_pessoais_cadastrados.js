'use strict'
export const automationData = async (id) => {
    const url = `https://dreamchock-backend.onrender.com/v1/dream-chock/api/all-data-register/user/${id}`;
  
    const response = await fetch(url)
  
    const data = await response.json(); // Converter para JSON
  
    return{
        ...data
    };
  };