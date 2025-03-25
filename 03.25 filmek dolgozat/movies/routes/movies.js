import * as movieController from '../controllers/moviesController.js';
import express from 'express'

const router = express.Router();

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovieById);

router.post('/',movieController.createMovie);


router.put('/:id',movieController.updateMovie);

router.delete('/:id', movieController.deleteMovie);

export default router;