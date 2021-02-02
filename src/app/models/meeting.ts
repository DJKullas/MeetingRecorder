import { Student } from './student';
import { Teacher } from './teacher';

export class Meeting {
    private _id: number;
    private _date: Date;
    private _student: Student;
    private _teacher: Teacher;
    private _dateString: string;
    private _details: string;

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

    public get dateString(): string {
        return this._dateString;
    }

    public set dateString(value: string) {
        this._dateString = value;
    }

    public get details(): string {
        return this._details;
    }

    public set details(value: string) {
        this._details = value;
    }

    constructor(id: number, date: Date, student: Student, teacher: Teacher, details: string) {
        this.id = id;
        this.date = date;
        this.student = student;
        this.teacher = teacher;
        var tempDate = new Date(date);
        this.dateString = (tempDate.getMonth() + 1) + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();
        this.details = details;
    }

}