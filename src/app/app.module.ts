import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import {AppComponent} from './app.component';
// import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
