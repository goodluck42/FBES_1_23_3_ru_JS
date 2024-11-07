import {Movie} from "./Movie";
import {IMovieService} from "./IMovieService";

export abstract class MovieServiceBase implements IMovieService {
    protected readonly _movies: Movie[];

    constructor() {
        this._movies = [];
    }

    addMovie(movie: Movie): void {
        this._movies.push(movie);
    }

    abstract getMovieById(id: number): Movie | null;

    removeMovie(id: number): Movie | null {

        for (let i = 0; i < this._movies.length; i++) {
            const movie = this._movies[i];

            if (movie.id === id) {
                return this._movies.splice(i, 1)[0];
            }
        }

        return null;
    }
}