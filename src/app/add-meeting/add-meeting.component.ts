import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { EventData } from 'tns-core-modules/ui/page';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { DatePicker } from 'tns-core-modules/ui/date-picker';
import { ShowMeetingsComponent } from '../show-meetings/show-meetings.component';

@Component({
  selector: 'ns-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  students: Array<Student>;
  teachers: Array<Teacher>;
  selectedStudentId: number;
  selectedTeacherId: number;
  selectedDate: Date;

  constructor(private dataService: DataService) { }

  async createMeetingsTable() {
    await this.dataService.createMeetingsTable();
  }

  // make listpicker show names but return id
  async getStudents() {
    this.students = [];
    this.students = await this.dataService.getStudents();
  }

  async getTeachers() {
    this.teachers = [];
    this.teachers = await this.dataService.getTeachers();
  }

  public onSelectedStudentChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.selectedStudentId = this.students[picker.selectedIndex].id;
    
}

public onSelectedTeacherChanged(args: EventData) {
  const picker = <ListPicker>args.object;
  this.selectedTeacherId = this.teachers[picker.selectedIndex].id;
}

public onDateChanged(args) {
  this.selectedDate = args.value;
}

public onDateLoaded(args) {
  const picker = <DatePicker>args.object;
  this.selectedDate = picker.date;
}

  async createMeeting() {
    await this.dataService.insertMeeting(this.selectedDate, this.selectedStudentId, this.selectedTeacherId);
  }

  async deleteMeetingsTable() {
    await this.dataService.dropMeetingsTable();
  }

  ngOnInit(): void {
    
    this.createMeetingsTable();
    this.getStudents();
    this.getTeachers();
  }

}
