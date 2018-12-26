import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TileModule } from '../tile';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
    declarations: [
        BoardComponent,
        SquareComponent
    ],
    imports: [
        CommonModule,
        TileModule
    ],
    exports: [
        BoardComponent
    ]
})
export class BoardModule {}
