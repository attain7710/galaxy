import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { GalaxyAvatarModule } from './avatar';
import { GalaxyButtonModule } from './button';
import { GalaxyCardModule } from './card';
import { GalaxyFormModule } from './form';
import { GalaxyMenuModule } from './menu';
import { GalaxyNavigationModule } from './navigation';
import { GalaxySpinnerModule } from './spinner';
=======
import { GalaxyNavigationModule } from './navigation';
>>>>>>> feat(tool): :sunrise:
import { GalaxyToolbarModule } from './toolbar';

@NgModule({
  imports: [
<<<<<<< HEAD
    GalaxyAvatarModule,
    GalaxyButtonModule,
    GalaxyCardModule,
    GalaxyFormModule,
    GalaxyMenuModule,
    GalaxyNavigationModule,
    GalaxySpinnerModule,
    GalaxyToolbarModule,
  ],
  exports: [
    GalaxyAvatarModule,
    GalaxyButtonModule,
    GalaxyCardModule,
    GalaxyFormModule,
    GalaxyMenuModule,
    GalaxyNavigationModule,
    GalaxySpinnerModule,
=======
    GalaxyNavigationModule,
    GalaxyToolbarModule,
  ],
  exports: [
    GalaxyNavigationModule,
>>>>>>> feat(tool): :sunrise:
    GalaxyToolbarModule,
  ],
  declarations: [],
})
export class GalaxyUIModule { }