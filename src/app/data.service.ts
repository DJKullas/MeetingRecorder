import { Injectable } from '@angular/core';
import { Student } from './models/student';
import { Teacher } from './models/teacher';
import { Meeting } from './models/meeting';

import { Observable, of } from 'rxjs';

var Sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private database: any;
    students: Array<Student> = [];
    teachers: Array<Teacher> = [];
    meetings: Array<Meeting> = [];

    public constructor() {
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, grade INTEGER)").then(id => {
                this.database = db;
            }, error => {
                
            });
        }, error => {
            
        });
    }

    // add parameters for values later
    public insertStudent(firstName: string, lastName: string, grade: number) {
        this.database.execSQL("INSERT INTO students (firstname, lastname, grade) VALUES (?, ?, ?)", [firstName, lastName, grade]).then(id => {
            
        }, error => {
            
        });
    }

    public insertTeacher() {
        this.database.execSQL("INSERT INTO teachers (firstname, lastname, title) VALUES (?, ?, ?)", ["Teachy", "McTeacher", "Science"]).then(id => {
            
        }, error => {
            
        });
    }

    public insertMeeting(date: Date, studentId: number, teacherId: number) {
        
        
        
        this.database.execSQL("INSERT INTO meetings (date, studentID, teacherID) VALUES (?, ?, ?)", [date, studentId, teacherId]).then(id => {
            
        }, error => {
            
        });
    }

    public async dropMeetingsTable(): Promise<any> {
        this.database.execSQL("DROP TABLE meetings").then(id => {
            
        }), error => {
            
        };
    }

    public async createTeachersTable(): Promise<any> {
        this.database.execSQL("CREATE TABLE IF NOT EXISTS teachers (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, title TEXT)").then(id => {
            
        }), error => {
            
        };
    }

    public async createMeetingsTable(): Promise<any> {
        this.database.execSQL("CREATE TABLE IF NOT EXISTS meetings (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATETIME, StudentID INTEGER, TeacherID INTEGER, FOREIGN KEY (StudentID) REFERENCES students(id), FOREIGN KEY (TeacherID) REFERENCES teachers(id))").then(id => {
            
        }), error => {
            
        };
    }

    public async getStudents(): Promise<Student[]> {
        this.students = [];
        await this.database.all("SELECT * FROM students").then(rows => {
            for(var row in rows) {
                this.students.push(new Student(rows[row][0], rows[row][1], rows[row][2], rows[row][3]));
            }
        }, error => {
            
        });

        return this.students;
    }

    public async getTeachers(): Promise<Teacher[]> {
        this.teachers = [];
        await this.database.all("SELECT * FROM teachers").then(rows => {
            for(var row in rows) {
                this.teachers.push(new Teacher(rows[row][0], rows[row][1], rows[row][2], rows[row][3]));
            }
        }, error => {
            
        });

        
        return this.teachers;
    }

    public async getStudent(id: number): Promise<Student> {
        
        var student: Student;
        student = await this.database.get('select * from students where id=?', id, function(err, row) {
            
          });

          return new Student(student[0], student[1], student[2], student[3]);
    }

    public async getTeacher(id: number): Promise<Teacher> {
        var teacher: Teacher;
        teacher = await this.database.get('select * from teachers where id=?', id, function(err, row) {
            
          });

          return new Teacher(teacher[0], teacher[1], teacher[2], teacher[3]);
    }

    public async getMeetings(): Promise<Meeting[]> {
        this.meetings = [];
        await this.database.all("SELECT * FROM meetings").then(async rows => {
            
            for(var row in rows) {
                var student: Student;
                var teacher: Teacher;

                
                student = await this.getStudent(rows[row][2]);
                teacher = await this.getTeacher(rows[row][3]);
                
                

                this.meetings.push(new Meeting(rows[row][0], rows[row][1], student, teacher));
            }
        }, error => {
            
        });

        
        return this.meetings;
    }
}
