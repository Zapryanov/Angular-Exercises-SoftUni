import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './guards/access.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "about",
    canActivate: [AccessGuard],
    component: AboutComponent,
    data: {
      isLogged: true
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
