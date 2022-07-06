import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cHeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    cHeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [cHeaderComponent , SidebarComponent]
})
export class SharedModule { }
