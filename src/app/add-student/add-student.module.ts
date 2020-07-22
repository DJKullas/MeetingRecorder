import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddStudentRoutingModule } from './add-student-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AddStudentComponent } from './add-student.component';


@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    AddStudentRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddStudentModule { }
