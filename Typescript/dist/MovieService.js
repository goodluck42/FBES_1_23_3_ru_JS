"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const MovieServiceBase_1 = require("./MovieServiceBase");
class MovieService extends MovieServiceBase_1.MovieServiceBase {
    getMovieById(id) {
        for (let i = 0; i < this._movies.length; i++) {
            const movie = this._movies[i];
            if (movie.id === id) {
                return movie;
            }
        }
        return null;
    }
}
exports.MovieService = MovieService;
