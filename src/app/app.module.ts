import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResizableDirective } from './resizable.directive';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { QuillConfigModule } from 'ngx-quill/config';
import { EditorComponent } from './editor/editor.component';
import { TableModule } from './table/table.module';

// import {QuillEditorsComponentComponent} from './quill-editors.component/quill-editors.component.component'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    EditorComponent,
    QuillEditorComponent,
    TableModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        table: true,
        toolbar: true,
        clipboard: true,
        keyboard: true,
        history: true,
      },
    }),
    QuillConfigModule.forRoot({
      theme:'snow',
      modules: {
        syntax:true,
        toolbar: [
          ['column-left'],
        ]
      },
    }),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
