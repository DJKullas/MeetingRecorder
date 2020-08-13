import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewStudent } from '../models/new-student';

@Component({
  selector: 'ns-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student: NewStudent;

  constructor(private dataService: DataService) { 
    this.student = new NewStudent();
  }

  // ensure grade is working properly
  async addStudent() {
    console.log("a: " + this.student.firstName + " a")
    await this.dataService.insertStudent(this.student.firstName, this.student.lastName, this.student.grade);

  }

  ngOnInit(): void {
  }
}
