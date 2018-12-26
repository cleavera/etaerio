import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TileModule } from '../tile';
import { TileRackComponent } from './components/tile-rack/tile-rack.component';

@NgModule({
    declarations: [
        TileRackComponent
    ],
    exports: [
        TileRackComponent
    ],
    imports: [
        CommonModule,
        TileModule
    ]
})
export class HandModule {
}
