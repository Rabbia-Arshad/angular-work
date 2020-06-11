import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizaaWebComponent } from './pizaaWeb/pizaa-web.component';
import { WebBodyComponent } from './web-body/web-body.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PortfolioResumeComponent } from './portfolio-resume/portfolio-resume.component';
import { PortfolioWorkComponent } from './portfolio-work/portfolio-work.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PraticeComponent } from './pratice/pratice.component';
import { Pratice5Component } from './pratice5/pratice5.component';
//import { EleService} from './ele-service.service';
import{Routes,RouterModule} from '@angular/router';
const routes:Routes=[];


@NgModule({
  declarations: [
    AppComponent,
    PizaaWebComponent,
    WebBodyComponent,
    PortfolioHeaderComponent,
    PortfolioHomeComponent,
    PortfolioResumeComponent,
    PortfolioWorkComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent,
    PraticeComponent,
    Pratice5Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 