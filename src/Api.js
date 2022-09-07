import axios from "axios";

export const dataApi = async (frame) => {
    try {
      const datos = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${frame}&page=0`);
      return datos.data.hits;
    } catch (error) {
      console.log(error)
      
    } 
  };
