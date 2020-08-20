import { Component, OnInit, ViewChild } from "@angular/core";
import { ShowMeetingsComponent } from "./show-meetings/show-meetings.component";
import { AddMeetingComponent } from "./add-meeting/add-meeting.component";
import { DataService } from "./data.service";
var Sqlite = require("nativescript-sqlite");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private dataService: DataService) {
        // Use the component constructor to inject providers.
    }

    addNewStudentsAndTeachers() {
        this.dataService.getStudents();
        this.dataService.getTeachers();
    }

    addNewMeetings() {
        this.dataService.getMeetings();
    }

    ngOnInit(): void {
    }
}
