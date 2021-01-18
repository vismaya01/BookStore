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
}