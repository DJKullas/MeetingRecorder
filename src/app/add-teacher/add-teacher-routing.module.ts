import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AddTeacherComponent } from './add-teacher.component';


const routes: Routes = [
  { path: "default", component: AddTeacherComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AddTeacherRoutingModule { }
