import { Component, Input } from '@angular/core';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
    selector: 'tile-tile',
    styleUrls: ['./tile.component.scss'],
    templateUrl: './tile.component.html'
})
export class TileComponent {
    @Input()
    public letter: ILetter;
}
