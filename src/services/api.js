import axios from 'axios';

/**Variavel contendo a url da API */
const api = axios.create( { baseURL:'http://localhost/apiphalcon/' } );

export default api;