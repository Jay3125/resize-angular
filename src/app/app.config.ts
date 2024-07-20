import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};


  // ngAfterViewInit() {
  //   // Access Quill instance after view is initialized
  //   const quill: Quill = this.editor.quillEditor;
  //   if (quill) {
  //     // Additional customization or event handling can be done here
  //     console.log('Quill instance:', quill);
  //   }
  // }