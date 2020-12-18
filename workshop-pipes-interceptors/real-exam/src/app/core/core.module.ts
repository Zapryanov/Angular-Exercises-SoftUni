import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { UserService } from '../user/user.service';
import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AppInterceptor } from './app.interceptor';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    UserService,
    storageServiceProvider,
    AuthGuard,
    AppInterceptor
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
