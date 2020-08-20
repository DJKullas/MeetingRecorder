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
    await this.dataService.insertStudent(this.student);

    let options = {
      title: "Student Added",
      message: "Your student has been added",
      okButtonText: "OK"
  };
  
    alert(options);

    this.student = new NewStudent();
  }

  ngOnInit(): void {
  }
}
