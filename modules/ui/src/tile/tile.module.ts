import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
    declarations: [
        TileComponent
    ],
    exports: [
        TileComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TileModule {}
