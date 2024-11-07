import {Movie} from "./Movie";
import {MovieServiceBase} from "./MovieServiceBase";

export class MovieService extends MovieServiceBase {
    getMovieById(id: number): Movie | null {
        for (let i = 0; i < this._movies.length; i++) {
            const movie = this._movies[i];

            if (movie.id === id) {
                return movie;
            }
        }

        return null;
    }
}