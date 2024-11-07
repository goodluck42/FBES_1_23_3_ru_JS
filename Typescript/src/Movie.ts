export class Movie {
    private _name: string;
    private readonly _id: number;
    public readonly genre: string;
    public readonly year: number;

    constructor(name: string, genre: string, year: number, id: number) {
        this._name = name;
        this.genre = genre;
        this.year = year;
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get id() {
        return this._id;
    }
}