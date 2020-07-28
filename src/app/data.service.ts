import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

var Sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private database: any;
    students: Array<any> = [];
    teachers: Array<any> = [];
    meetings: Array<any> = [];

    public constructor() {
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, grade INTEGER)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    // add parameters for values later
    public insertStudent() {
        this.database.execSQL("INSERT INTO students (firstname, lastname, grade) VALUES (?, ?, ?)", ["Sam", "Samuels", 4]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public insertTeacher() {
        this.database.execSQL("INSERT INTO teachers (firstname, lastname, title) VALUES (?, ?, ?)", ["Teachy", "McTeacher", "Science"]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public insertMeeting() {
        this.database.execSQL("INSERT INTO meetings (date, studentID, teacherID) VALUES (?, ?, ?)", [Date.now(), 3, 2]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public async createTeachersTable(): Promise<any> {
        this.database.execSQL("CREATE TABLE IF NOT EXISTS teachers (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, title TEXT)").then(id => {
            console.log("Created Teachers Table or it was already here", id);
        }), error => {
            console.log("Error creating teachers table", error);
        };
    }

    public async createMeetingsTable(): Promise<any> {
        this.database.execSQL("CREATE TABLE IF NOT EXISTS meetings (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATETIME, StudentID INTEGER, TeacherID INTEGER, FOREIGN KEY (StudentID) REFERENCES students(id), FOREIGN KEY (TeacherID) REFERENCES teachers(id))").then(id => {
            console.log("Created Meetings Table or it was already here", id);
        }), error => {
            console.log("Error creating meetings table", error);
        };
    }

    public async getStudents(): Promise<any[]> {
        this.students = [];
        await this.database.all("SELECT * FROM students").then(rows => {
            for(var row in rows) {
                this.students.push({
                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "grade": rows[row][3],
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });

        return this.students;
    }

    public async getTeachers(): Promise<any[]> {
        this.teachers = [];
        await this.database.all("SELECT * FROM teachers").then(rows => {
            for(var row in rows) {
                this.teachers.push({
                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "title": rows[row][3],
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });

        return this.teachers;
    }

    public async getMeetings(): Promise<any[]> {
        this.meetings = [];
        await this.database.all("SELECT * FROM meetings").then(rows => {
            for(var row in rows) {
                this.meetings.push({
                    "id": rows[row][0],
                    "date": rows[row][1],
                    "studentID": rows[row][2],
                    "teacherID": rows[row][3],
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });

        return this.meetings;
    }
}
