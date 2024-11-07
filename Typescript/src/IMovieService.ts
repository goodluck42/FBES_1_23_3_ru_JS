import {Movie} from "./Movie";

export interface IMovieService {
    addMovie(movie: Movie): void;

    removeMovie(id: number): Movie | null;

    getMovieById(id: number): Movie | null;
}