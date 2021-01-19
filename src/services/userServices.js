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
}