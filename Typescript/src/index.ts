import {IMovieService} from "./IMovieService";
import {MovieServiceBase} from "./MovieServiceBase";
import {MovieService} from "./MovieService";
import {Movie} from "./Movie";

type Nullable<T> = T | null;
type Gender = "Male" | "Female";
type Model = {
    age: number,
    name: string,
    birthday: Date,
    Gender: Gender
};
type ExtendedModel = Model & {
    surname?: Nullable<string>,
};
type StringOrNumber = string | number;

let val: string = "42";
let val1: number = 42;
let val2: boolean = true;
let val3: object = {};
let val4: ExtendedModel = {
    age: 42,
    birthday: new Date(),
    name: "Vadim",
    Gender: "Female"
};
let arr: (string | number)[] = [];

if (isNull(val4.surname)) {

}

let val5: StringOrNumber = 42;

// if (typeof val5 === "string") {
//
// }
//
// if (typeof val5 === "number") {
//
// }

function isNull(value: any): boolean {
    return value === null || value === undefined;
}

function sum(...rest: number[]): number {
    let sum: number = 0;

    for (const value of rest) {
        sum += value;
    }

    return sum;
}

let service: IMovieService = new MovieService();

service.addMovie(new Movie("Wolf of Wall st.", "criminal", 2014, 1));
let movie = service.getMovieById(1);

if (movie !== null) {
    console.log(movie);
}