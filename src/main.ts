import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';  // Importar o FormsModule aqui também

bootstrapApplication(AppComponent, { 
  providers: [
  importProvidersFrom(FormsModule)
  ]
}).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));