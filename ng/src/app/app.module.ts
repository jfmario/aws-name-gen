import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TabMenuModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LanguageComponent } from './components/language/language.component';
import { LanguageService } from './services/language.service';

const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: LanguageComponent, path: 'language/:lang' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ( appRoutes ),
    TabMenuModule
  ],
  providers: [ LanguageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
