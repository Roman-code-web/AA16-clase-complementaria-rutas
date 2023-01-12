import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"contactanos", component:ContactenosComponent},
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
