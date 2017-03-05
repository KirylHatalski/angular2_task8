import 'zone.js';
import 'reflect-metadata';
import './app/styles.styl';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }            from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
