const API_KEY = '6f7bb0549630d54a64924a20e9310867';

const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
        fetchNetflexOriginals: `/discover/tv?api_key=${API_KEY}`,    
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    }
export default requests;