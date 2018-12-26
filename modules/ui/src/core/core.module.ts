import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardModule } from '../board';
import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BoardModule
    ]
})
export class CoreModule {
}
