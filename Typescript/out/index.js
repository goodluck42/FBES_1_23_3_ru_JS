"use strict";
(() => {
  // src/MovieServiceBase.ts
  var MovieServiceBase = class {
    constructor() {
      this._movies = [];
    }
    addMovie(movie2) {
      this._movies.push(movie2);
    }
    removeMovie(id) {
      for (let i = 0; i < this._movies.length; i++) {
        const movie2 = this._movies[i];
        if (movie2.id === id) {
          return this._movies.splice(i, 1)[0];
        }
      }
      return null;
    }
  };

  // src/MovieService.ts
  var MovieService = class extends MovieServiceBase {
    getMovieById(id) {
      for (let i = 0; i < this._movies.length; i++) {
        const movie2 = this._movies[i];
        if (movie2.id === id) {
          return movie2;
        }
      }
      return null;
    }
  };

  // src/Movie.ts
  var Movie = class {
    constructor(name, genre, year, id) {
      this._name = name;
      this.genre = genre;
      this.year = year;
      this._id = id;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }
    get id() {
      return this._id;
    }
  };

  // src/index.ts
  var val4 = {
    age: 42,
    birthday: /* @__PURE__ */ new Date(),
    name: "Vadim",
    Gender: "Female"
  };
  if (isNull(val4.surname)) {
  }
  function isNull(value) {
    return value === null || value === void 0;
  }
  var service = new MovieService();
  service.addMovie(new Movie("Wolf of Wall st.", "criminal", 2014, 1));
  var movie = service.getMovieById(1);
  if (movie !== null) {
    console.log(movie);
  }
})();
