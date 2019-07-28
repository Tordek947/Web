import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { TuplePipe } from './tuple.pipe';
import { PagePipe } from './subjects/page.pipe';
import { FilterPipe } from './subjects/filter.pipe';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { MapEntryComponent } from './map-entry/map-entry.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CorsInterceptor } from './interceptors/cors-interceptor';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    SubjectsComponent,
    ProjectsComponent,
    LogoComponent,
    FooterComponent,
    TuplePipe,
    PagePipe,
    FilterPipe,
    DataEntryComponent,
    MapEntryComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
