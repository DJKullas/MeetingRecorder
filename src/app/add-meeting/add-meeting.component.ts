import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  students: Array<any>;
  test: Array<any> = [{firstname: "abc", lastname: "def"},
  {firstname: "jfid", lastname: "fdsf"}];
  abc: Array<string> = ["one abc0", "two fdk"];
  studentNamesAndIds: Array<string>;

  constructor(private dataService: DataService) { }

  async onButtonPress() {
    await this.dataService.insertMeeting();
    var meetings = await this.dataService.getMeetings();
    console.log(meetings);
  }

  async createMeetingsTable() {
    await this.dataService.createMeetingsTable();
  }

  // make listpicker show names but return id
  async getStudentsAndNames() {
    this.students = [];
    this.studentNamesAndIds = [];
    this.students = await this.dataService.getStudents();

    for (var i = 0; i < this.students.length; i+= 1) {
      this.studentNamesAndIds.push(`Name: ${this.students[i].firstname} ${this.students[i].lastname}, Grade: ${this.students[i].grade}, Id: ${this.students[i].id}`);
    }
  }

  ngOnInit(): void {
    this.createMeetingsTable();
    this.getStudentsAndNames();
  }

}
