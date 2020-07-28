import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private dataService: DataService) { }

  async onButtonPress() {
    await this.dataService.insertTeacher();
    var teachers = await this.dataService.getTeachers();
    console.log(teachers);
  }

  async createTeachersTable() {
    await this.dataService.createTeachersTable();
  }

  ngOnInit(): void {
    this.createTeachersTable();
  }

}
