import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class CoreModule {
}
