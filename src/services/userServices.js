import Axios from './axiosServices';

const httpService = new Axios();

export default class UserService {
    baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_app/swagger/api"

    registration = (data) => {
        return httpService.Post(`${this.baseUrl}/bookstore_user/registration`, data);
    }
}