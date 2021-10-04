import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/purchase-order/";

class PurchaseOrderService{

    getAllPurcaseOrdersBySiteManager = async (sitemanager) => {
        try{
            const res = await axios.get(`${BASE_URL}/get-purchase-orders/${sitemanager}`);
            return res;
        }catch(error){
            return error.response;
        }
    }

    updateOrder = async (formData) => {
        try{
            const res = await axios.put(`${BASE_URL}/update-order`, formData);
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

    getAllPurchaseOrder = async () => {
        try{
            const res = await axios.get(`${BASE_URL}/get-all-purchase-orders`);
            return res;
        }catch(error){
            return error.response;
        }
    }
}

export default new PurchaseOrderService();