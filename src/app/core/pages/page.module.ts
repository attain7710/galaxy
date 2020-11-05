import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> feat(tool): :sunrise:
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
<<<<<<< HEAD
  imports: [
    RouterModule,
    TranslateModule
  ],
=======
  imports: [TranslateModule],
>>>>>>> feat(tool): :sunrise:
  exports: [
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
})
export class PageModule { }