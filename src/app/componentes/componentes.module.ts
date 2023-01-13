import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBienvenidosComponent } from './section-bienvenidos/section-bienvenidos.component';
import { SectionMisionComponent } from './section-mision/section-mision.component';
import { SectionVisionComponent } from './section-vision/section-vision.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    SectionBienvenidosComponent,
    SectionMisionComponent,
    SectionVisionComponent,
    FormsComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SectionBienvenidosComponent,
    SectionMisionComponent,
    SectionVisionComponent,
    FormsComponent
  ]
})
export class ComponentesModule { }
