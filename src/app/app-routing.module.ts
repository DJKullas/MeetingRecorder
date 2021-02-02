import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { MeetingComponent } from "./meeting/meeting.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(showMeetingsTab:show-meetings/default//addMeetingTab:add-meeting/default//addStudentTab:add-student/default//addTeacherTab:add-teacher/default)",
        pathMatch: "full"
    },

    {
        path: "show-meetings",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/show-meetings/show-meetings.module").then((m) => m.ShowMeetingsModule),
        outlet: "showMeetingsTab"
    },
    {
        path: "add-meeting",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/add-meeting/add-meeting.module").then((m) => m.AddMeetingModule),
        outlet: "addMeetingTab"
    },
    {
        path: "add-student",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/add-student/add-student.module").then((m) => m.AddStudentModule),
        outlet: "addStudentTab"
    },
    {
        path: "add-teacher",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/add-teacher/add-teacher.module").then((m) => m.AddTeacherModule),
        outlet: "addTeacherTab"
    },
    {
        path: "meeting/:id",
        component: MeetingComponent,
        outlet: "showMeetingsTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
