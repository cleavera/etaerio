import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardModule } from '../board';
import { HandModule } from '../hand';
import { MoveModule } from '../move';
import { AppComponent } from './components/app/app.component';
import { GameComponent } from './components/game/game.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        MenuComponent
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
