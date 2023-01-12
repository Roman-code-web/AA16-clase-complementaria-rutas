import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule
  ]
})
export class PagesModule { }
