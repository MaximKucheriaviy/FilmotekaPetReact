class TMDB {
    constructor(key){
        this.apiKey = key;
    }
    async getTrendings(page = 1){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}&page=${page}`);
            if(response.ok){
                const data = await response.json();
                console.log(data);
                return data;
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

export default TMDB;