import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionMisionComponent } from './componentes/section-mision/section-mision.component';
import { SectionVisionComponent } from './componentes/section-vision/section-vision.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"nosotros", component:NosotrosComponent,
  children:[
    {path:"mision", component:SectionMisionComponent},
    {path:"vision", component:SectionVisionComponent},
  ]
  },
  {path:"contactar", component:ContactenosComponent},
  {path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
