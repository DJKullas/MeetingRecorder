import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

var Sqlite = require("nativescript-sqlite");

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private database: any;
    students: Array<any> = [];

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

    public async getString(): Promise<string> {

        var val;
        await this.database.all("SELECT * FROM students").then(rows => {
            
            
            console.log(rows[0][1] + " fnsoofnhdsnjo");
            val = rows[0][1];
        }, error => {
            console.log("SELECT ERROR", error);
        });

        console.log(val + "before return");
        return val;
    }

    public async getStudents(): Promise<any[]> {
        var returnThis;
        await this.database.all("SELECT * FROM students").then(rows => {
            for(var row in rows) {
              //console.log("Row " + row + rows[row][1]);
                this.students.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "grade": rows[row][3],
                });
            }
            //console.log("Students" + this.students.length);
            //return this.students;
        }, error => {
            console.log("SELECT ERROR", error);
        });

        //console.log("Dont get here " + this.students.length)
        //console.log(this.students);
        return this.students;
    }
}
