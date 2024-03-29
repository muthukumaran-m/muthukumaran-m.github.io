import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { WorkComponent } from './components/work/work.component';
import { InsightsComponent } from './components/insights/insights.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './components/insights/show/show.component';
import { FormsModule } from '@angular/forms';
import { ProfessionalComponent } from './components/work/professional/professional.component';
import { HobbyComponent } from './components/work/hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    HobbyComponent,
    MenuComponent,
    WorkComponent,
    InsightsComponent,
    ShowComponent,
    ProfessionalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
