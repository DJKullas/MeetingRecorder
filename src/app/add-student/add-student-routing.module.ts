import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AddStudentComponent } from './add-student.component';


const routes: Routes = [
  { path: "default", component: AddStudentComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AddStudentRoutingModule { }
