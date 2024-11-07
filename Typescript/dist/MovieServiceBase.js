"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieServiceBase = void 0;
class MovieServiceBase {
    constructor() {
        this._movies = [];
    }
    addMovie(movie) {
        this._movies.push(movie);
    }
    removeMovie(id) {
        for (let i = 0; i < this._movies.length; i++) {
            const movie = this._movies[i];
            if (movie.id === id) {
                return this._movies.splice(i, 1)[0];
            }
        }
        return null;
    }
}
exports.MovieServiceBase = MovieServiceBase;
