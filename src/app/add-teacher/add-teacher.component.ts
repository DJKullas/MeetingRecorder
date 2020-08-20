import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewTeacher } from '../models/new-teacher';

@Component({
  selector: 'ns-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher: NewTeacher;

  constructor(private dataService: DataService) {
    this.teacher = new NewTeacher();
   }

   async addTeacher() {
     await this.dataService.insertTeacher(this.teacher);

     let options = {
      title: "Teacher Added",
      message: "Your teacher has been added",
      okButtonText: "OK"
  };
  
    alert(options);

    this.teacher = new NewTeacher();
   }

  async createTeachersTable() {
    await this.dataService.createTeachersTable();
  }

  ngOnInit(): void {
    this.createTeachersTable();
  }

}
