import { Injectable } from '@angular/core';
import { Student } from './models/student';
import { Teacher } from './models/teacher';
import { Meeting } from './models/meeting';

import { Observable, of, Subject } from 'rxjs';
import { NewStudent } from './models/new-student';
import { NewTeacher } from './models/new-teacher';
import { NewMeeting } from './models/new-meeting';

var Sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private database: any;
    students: Array<Student> = [];
    teachers: Array<Teacher> = [];
    meetings: Array<Meeting> = [];

    studentListChange: Subject<Array<Student>> = new Subject<Array<Student>>();
    teacherListChange: Subject<Array<Teacher>> = new Subject<Array<Teacher>>();
    meetingListChange: Subject<Array<Meeting>> = new Subject<Array<Meeting>>();

    
    sharedStudents = this.studentListChange.asObservable();
    sharedTeachers = this.teacherListChange.asObservable();
    sharedMeetings = this.meetingListChange.asObservable();

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
    public insertStudent(student: NewStudent) {
        this.database.execSQL("INSERT INTO students (firstname, lastname, grade) VALUES (?, ?, ?)", [student.firstName, student.lastName, student.grade]).then(id => {
            this.getStudents();
        }, error => {
            
        });
    }

    public insertTeacher(teacher: NewTeacher) {
        this.database.execSQL("INSERT INTO teachers (firstname, lastname, title) VALUES (?, ?, ?)", [teacher.firstName, teacher.lastName, teacher.title]).then(id => {
            this.getTeachers();
        }, error => {
            
        });
    }

    public insertMeeting(meeting: NewMeeting) {
        this.database.execSQL("INSERT INTO meetings (date, studentID, teacherID, details) VALUES (?, ?, ?, ?)", [meeting.date, meeting.studentId, meeting.teacherId, meeting.details]).then(id => {
            this.getMeetings();
        }, error => {
            
        });
    }

    // public async dropMeetingsTable(): Promise<any> {
    //     this.database.execSQL("DROP TABLE meetings").then(id => {
            
    //     }), error => {
            
    //     };
    // }

    // public async dropStudentsTable(): Promise<any> {
    //     this.database.execSQL("DROP TABLE students").then(id => {
            
    //     }), error => {
            
    //     };
    // }

    // public async dropTeachersTable(): Promise<any> {
    //     this.database.execSQL("DROP TABLE teachers").then(id => {
            
    //     }), error => {
            
    //     };
    // }

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

    public async addDetailsColumnToMeetings(): Promise<any> {
        this.database.execSQL("ALTER TABLE meetings ADD COLUMN details TEXT").then(id => {

        }, error => {
            console.log("Already added details column");
        });
    }

    public async getStudents(): Promise<Student[]> {
        this.students = [];
        await this.database.all("SELECT * FROM students").then(rows => {
            for(var row in rows) {
                this.students.push(new Student(rows[row][0], rows[row][1], rows[row][2], rows[row][3]));
            }
        }, error => {
            
        });

        this.studentListChange.next(this.students);
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

        this.teacherListChange.next(this.teachers);
        return this.teachers;
    }

    public async getStudent(id: number): Promise<Student> {
        
        var student: Student;
        student = await this.database.get('select * from students where id=?', id, function(err, row) {
            
          });
console.log(".workkkkk" + student + "id: " + id)
          return new Student(student[0], student[1], student[2], student[3]);
    }

    public async getTeacher(id: number): Promise<Teacher> {
        var teacher: Teacher;
        teacher = await this.database.get('select * from teachers where id=?', id, function(err, row) {
            
          });

          return new Teacher(teacher[0], teacher[1], teacher[2], teacher[3]);
    }

    public async getMeeting(id: number): Promise<Meeting> {
        var meeting: Meeting;
        meeting = await this.database.get('select * from meetings where id=?', id, function(err, row) {

        });

        return new Meeting(meeting[0], meeting[1], await this.getStudent(meeting[2]), await this.getTeacher(meeting[3]), meeting[4]);
    }

    public async getMeetings(): Promise<Meeting[]> {
        this.meetings = [];
        console.log("IN")
        await this.database.all("SELECT * FROM meetings").then(async rows => {
            console.log("FDSGDSGSDUHGUISHGUOs")
            for(var row in rows) {
    
                var student: Student;
                var teacher: Teacher;

                console.log("Before awaits");
                console.log(rows[row][0]);
                console.log(rows[row][1]);
                console.log(rows[row][2]);
                console.log(rows[row][3]);
                console.log(rows[row][4]);
                student = await this.getStudent(rows[row][2]);
                teacher = await this.getTeacher(rows[row][3]);
                console.log("After awaits")
                
                

                this.meetings.push(new Meeting(rows[row][0], rows[row][1], student, teacher, rows[row][4]));
            }
            console.log("MORE")
        }, error => {
            console.log("ERROR")
        });

        console.log("DFSFDDSF")
        console.log("METINGS" + this.meetings)
        
        this.meetingListChange.next(this.meetings);
        return this.meetings;
    }
}
