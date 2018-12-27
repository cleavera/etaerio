import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardModule } from '../board';
import { HandModule } from '../hand';
import { MoveModule } from '../move';
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
        BoardModule,
        HandModule,
        MoveModule
    ]
})
export class CoreModule {
}
