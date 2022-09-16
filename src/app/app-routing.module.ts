import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';

const routes: Routes = [
  {path: '', component: PorPaisComponent},
  {path: 'region', component: PorRegionComponent},
  {path: 'capital', component: PorCapitalComponent},
  {path: 'pais/id', component: VerPaisComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
