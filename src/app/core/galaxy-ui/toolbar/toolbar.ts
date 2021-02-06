import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'galaxy-toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.scss'],
  host: {
    'class': 'galaxy-toolbar'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalaxyToolbar {

  constructor() { }

}
