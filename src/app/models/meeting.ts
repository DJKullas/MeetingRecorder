class Meeting {
    private _id: number;
    private _date: Date;
    private _student: Student;
    private _teacher: Teacher;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    public get student(): Student {
        return this._student;
    }
    public set student(value: Student) {
        this._student = value;
    }
    public get teacher(): Teacher {
        return this._teacher;
    }
    public set teacher(value: Teacher) {
        this._teacher = value;
    }

    constructor(id: number, date: Date, student: Student, teacher: Teacher) {
        this.id = id;
        this.date = date;
        this.student = student;
        this.teacher = teacher;
    }

}