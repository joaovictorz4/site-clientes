import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapService } from './services/bootstrap.service';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [BootstrapService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
