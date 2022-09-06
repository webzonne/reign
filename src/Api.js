import axios from "axios";

export const getDataAngular = async (count) => {
    try {
      const datos = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0`);
      return datos.data;
    } catch (error) {
      console.log(error)
      console.log(count)
    } 
  };
  export const getDataReact = async () => {
    try {
      const datos = await axios.get("https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0");
      return datos.data;
    } catch (error) {
      console.log(error)
    } 
  };

  export const getDataVue = async () => {
    try {
      const datos = await axios.get("https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0");
      return datos.data;
    } catch (error) {
      console.log(error)
    } 
  };