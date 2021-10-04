import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/suppliers/";

class SupplierService{
    getAllSuppliers = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/get-all-suppliers`);
            return res;
        }catch(error){
            return error.response;
        }
    }

    addNewSupplier = async (formData) => {
        try{
            const res = await axios.post(`${BASE_URL}/add-supplier`, formData);
            return res;
        }catch(error){
            return error.response;
        }
    }

    getApprovedSuppliers = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/get-approved-supplers`);
            return res;
        }catch(error){
            return error.response;
        }
    }

    updateStatus = async (formData) => {
        try{
            const res = await axios.patch(`${BASE_URL}/update-status`, formData);
            return res;
        }catch(error){
            return error.response;
        }
    }
};

export default new SupplierService();