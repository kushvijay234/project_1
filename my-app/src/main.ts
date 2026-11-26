import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes as routeConfig } from './app/app.routes';

/* 
update appconfig to provider
for calling the router file 
*/
bootstrapApplication(App,{
  providers: [provideRouter(routeConfig)],
})
  .catch((err) => console.error(err));
