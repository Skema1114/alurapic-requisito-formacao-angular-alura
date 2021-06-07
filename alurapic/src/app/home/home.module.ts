import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SigninComponent, SignoutComponent],
  imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule],
})
export class HomeModule {}
