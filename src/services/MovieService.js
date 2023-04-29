import instance from './BaseService';

export default class MovieService {

    static async getPopularMovies() {

        return await instance.get('movie/popular')
            .then(response => response.data.results)
    }

    static async getMovieById(id){
        return await instance.get(`movie/${id}`)
            .then(response => response.data)
    }
}