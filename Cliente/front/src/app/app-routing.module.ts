import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { ReportesComponent } from './component/reportes/reportes.component';

const routes: Routes = [
  {
    path:'principal',
    component:PrincipalComponent
  },
  {
    path:'reportes',
    component:ReportesComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
