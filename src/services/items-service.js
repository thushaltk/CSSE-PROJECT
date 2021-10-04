import axios from "axios";

const BASE_URL = "http://localhost:5000/api/items/";

class ItemsService {
  addItem = async (formData) => {
    try {
      const res = await axios.post(`${BASE_URL}/add-item`, formData);
      return res;
    } catch (error) {
      return error.response;
    }
  };

  getAllItems = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get-all-items`);
      return res;
    } catch (error) {
      return error.response;
    }
  };

  deleteItem = async (id) => {
    try{
        const res = await axios.delete(`${BASE_URL}/delete-item/${id}`);
        return res;
    }catch(error){
        return error.response;
    }
  }
}

export default new ItemsService();
