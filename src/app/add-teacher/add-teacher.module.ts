import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddTeacherRoutingModule } from './add-teacher-routing.module';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { AddTeacherComponent } from './add-teacher.component';


@NgModule({
  declarations: [AddTeacherComponent],
  imports: [
    AddTeacherRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddTeacherModule { }
