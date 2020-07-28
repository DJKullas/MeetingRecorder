import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  students: Array<any>;

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
  async getStudents() {
    this.students = [];
    this.students = await this.dataService.getStudents();
  }

  ngOnInit(): void {
    this.createMeetingsTable();
    this.getStudents();
  }

}
