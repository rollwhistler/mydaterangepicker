import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleDateRangePickerModule } from './sample-date-range-picker-module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SampleDateRangePickerModule)
  .catch(err => console.error(err));
