import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { EventData } from 'tns-core-modules/ui/page';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { DatePicker } from 'tns-core-modules/ui/date-picker';
import { NewMeeting } from '../models/new-meeting';

@Component({
  selector: 'ns-add-meeting',
  templateUrl: './add-meeting.component.html'
})
export class AddMeetingComponent implements OnInit {

  students: Array<Student>;
  teachers: Array<Teacher>;
  meeting: NewMeeting;

  constructor(private dataService: DataService) {
    this.meeting = new NewMeeting();
    this.students = dataService.students;
    this.teachers = dataService.teachers;
   }

  async createMeetingsTable() {
    await this.dataService.createMeetingsTable();
    await this.dataService.addDetailsColumnToMeetings();
  }

  // make listpicker show names but return id
  async getStudents() {
    // this.students = [];
    // this.students = await this.dataService.getStudents();

    console.log(this.students);
    await this.dataService.getStudents();
    console.log(this.students);
  }

  async getTeachers() {
    await this.dataService.getTeachers();
  }

  public onSelectedStudentChanged(args: EventData) {
      const picker = <ListPicker>args.object;
      this.meeting.studentId = this.students[picker.selectedIndex].id;
    } 


  public onSelectedTeacherChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.meeting.teacherId = this.teachers[picker.selectedIndex].id;
  } 


public onDateChanged(args) {
  this.meeting.date = args.value;
}

public onDateLoaded(args) {
  const picker = <DatePicker>args.object;
  this.meeting.date = picker.date;
}

  async createMeeting() {
    await this.dataService.insertMeeting(this.meeting);
    let options = {
      title: "Meeting Created",
      message: "Your meeting has been created",
      okButtonText: "OK"
  };
  
    this.meeting.details = "";
    alert(options);
  }

  ngOnInit(): void {
    this.createMeetingsTable();
    this.dataService.sharedStudents.subscribe(students => this.students = students);    
    this.dataService.sharedTeachers.subscribe(teachers => this.teachers = teachers);
    
    this.getTeachers();
    this.dataService.getStudents();
  }

}
