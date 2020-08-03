export class Student {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _fullName: string;
    private _grade: number;

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
    public get grade(): number {
        return this._grade;
    }
    public set grade(value: number) {
        this._grade = value;
    }

    constructor(id: number, firstName: string, lastName: string, grade: number) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${this._firstName} ${this._lastName}`;
        this._grade = grade;
    }
    
}
