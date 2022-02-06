import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { CineCreateComponent } from './components/cine/cine-create/cine-create.component';
import { CineListComponent } from './components/cine/cine-list/cine-list.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'cine-create', component: CineCreateComponent},
  {path: 'cine-list', component: CineListComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
