import axios from "axios";

const instanceHTTP = axios.create({
    baseURL: 'https://api.b7web.com.br'
});

export const api = {
    loadMovies: async () => {
        let response = await instanceHTTP.get('/cinema/');
        return response.data;
    }
}