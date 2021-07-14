import axios from 'axios';
export const getCoupons = async()=>{
    const res = await axios.delete('https://umpteens-backend.herokuapp.com/coupon');
    return res;
}