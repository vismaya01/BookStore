import Axios from './axiosServices';

const httpService = new Axios();

export default class UserService {
    baseUrl = "https://backend-bookstore.herokuapp.com"

    registration = (data) => {
        return httpService.Post(`${this.baseUrl}/bookstore_user/registration`, data);
    }

    login = (data) => {
        return httpService.Post(`${this.baseUrl}/bookstore_user/login`, data);
    }

    getAllBook = () => {
        return httpService.Get(`${this.baseUrl}/bookstore_user/get/book`);
    }

    addCart = (value,token) => {
        return httpService.Post(`${this.baseUrl}​/bookstore_user/add_cart_item/${value}`, false,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }

    getCartBook = (token) => {
        return httpService.Get(`${this.baseUrl}​/bookstore_user/get_cart_items`,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }

    quantity = (data , value ,token) => {
        return httpService.Put(`${this.baseUrl}​/bookstore_user/cart_item_quantity/${value}`, data,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }

    deleteCart = (value ,token) => {
        return httpService.Delete(`${this.baseUrl}​​/bookstore_user/remove_cart_item/${value}`,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }

    customerDetails = (data,token) => {
        return httpService.Put(`${this.baseUrl}​​/bookstore_user/edit_user`, data,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }

    placeOrder = (data,token) => {
        return httpService.Post(`${this.baseUrl}​​/bookstore_user/add/order`, data,{
            headers: {
                "x-access-token": `${token}`,
            }
        });
    }
}