<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
=======
import { ChangeDetectionStrategy, Component } from '@angular/core';
>>>>>>> feat(tool): :sunrise:

@Component({
  selector: 'galaxy-toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.scss'],
  host: {
    'class': 'galaxy-toolbar'
  },
<<<<<<< HEAD
  encapsulation: ViewEncapsulation.None,
=======
>>>>>>> feat(tool): :sunrise:
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalaxyToolbar {

  constructor() { }

}
