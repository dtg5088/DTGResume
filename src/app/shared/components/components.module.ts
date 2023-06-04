import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { DisplayBannerComponent } from './display-banner/display-banner.component';
import { ResumeSideBarComponent } from './resume/resume-side-bar/resume-side-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SkillsListComponent,
    ResumeComponent,
    SkillsContainerComponent,
    DisplayBannerComponent,
    ResumeSideBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NavBarComponent,
    SkillsListComponent,
    ResumeComponent,
    SkillsContainerComponent,
    DisplayBannerComponent,
    ResumeSideBarComponent,
  ]
})
export class ComponentsModule { }
