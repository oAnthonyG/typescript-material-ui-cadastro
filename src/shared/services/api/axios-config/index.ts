import axios from 'axios';

import { errorInterceptor, responseInterceptor } from './interceptors';
import { Eviroment } from '../../../environment';

const Api = axios.create({
    baseURL: Eviroment.URL_BASE,
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export { Api }