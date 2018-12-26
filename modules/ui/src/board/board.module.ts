import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
    declarations: [
        BoardComponent,
        SquareComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BoardComponent
    ]
})
export class BoardModule {}
