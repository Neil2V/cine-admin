import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


import { CineCreateComponent } from './components/cine/cine-create/cine-create.component';
import { CineEditComponent } from './components/cine/cine-edit/cine-edit.component';
import { CineListComponent } from './components/cine/cine-list/cine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    AdminComponent,
    LoginComponent,
    CineCreateComponent,
    CineEditComponent,
    CineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
