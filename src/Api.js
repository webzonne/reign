import axios from "axios";

export const dataApi = async (frame) => {
    try {
      const datos = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${frame}&page=0`);
      console.log(datos)
      return datos.data.hits;
    } catch (error) {
      console.log(error)
      
    } 
  };

  export const dataMoreApi = async (frame,page) => {
    try {
      const datos = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${frame}&page=${page}`);
      return datos.data.hits;
    } catch (error) {
      console.log(error)
      
    } 
  };
