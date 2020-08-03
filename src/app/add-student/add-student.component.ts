import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  students: Array<any>;
  testStudent: Array<any>;

  constructor(private dataService: DataService) { }

  async onButtonPress() {
    var students = await this.dataService.getStudents();
    
  }

  ngOnInit(): void {
  }
}
