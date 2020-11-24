import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { AccessGuard } from './guards/access.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    HttpClientModule
  ],
  providers: [
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
