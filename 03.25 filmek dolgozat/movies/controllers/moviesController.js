import movies from '../data/movies.js';

export const getAllMovies = (req, res) =>
{
    res.status(200).json(movies)
}

export const getMovieById = (req, res) =>
{
    const id = req.params.id
    if(id < 0 || id >= movies.length)
    {
        return res.status(404).json({message: 'Movie not found'})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req, res) =>
    {
        const movie = req.body
        if(!movie.title || !movie.director || !movie.year || !movie.oscarAward === undefined)
        {
            return res.status(404).json({message: 'Missing data'})
        }
        movies.push(movie)
        res.status(200).json(movies)
    }

    export const updateMovie =(req,res)=> {
        const id= req.params.id
        if (id<0 || id >= movies.length){
            return res.status(404).json({message:"Movie not found" })
        }
        const {title, director, year, oscarAward}=req.body
        if(!title || !director || !year || !oscarAward){
            return res.status(404).json({message: "Missing data"})
        }
        movies[id]={title, director, year, oscarAward}
        res.status(200).json(movies[id])
    }
    export const deleteMovie=  (req,res)=> {
        const id=req.params.id
        if (id <0 || id >= movies.length){
            return res.status(404).json({message:"Movie not found"})
        }
        movies.splice(id, 1)
        res.status(200).json({message:"Delete successful"})
    }