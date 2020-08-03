export class Teacher  {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _fullName: string;
    private _title: string;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    constructor(id: number, firstName: string, lastName: string, title: string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${this._firstName} ${this._lastName}`;
        this._title = title;
    }
}