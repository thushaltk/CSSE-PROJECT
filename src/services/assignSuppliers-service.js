import axios from "axios";

const BASE_URL = "http://localhost:5000/api/assigned-supplier/";

class AssignSuppliersService{
    addAssignSuppliers = async (formData) => {
        try{
            const res = await axios.post(`${BASE_URL}/add-assigned-supplier`, formData);
            return res;
        }catch(error){
            return error.response;
        }
    }

    getAssignedByPurchaseOrderID = async (id) => {
        try{
            const res = await axios.get(`${BASE_URL}/get-assigned-by-id/${id}`);
            return res;
        }catch(error){
            return error.response;
        }
    }

}

export default new AssignSuppliersService();