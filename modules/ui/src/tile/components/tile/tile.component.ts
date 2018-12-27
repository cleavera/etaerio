import { Component, Input } from '@angular/core';
import { Drink } from '../../constants/drinks.constant';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
    selector: 'tile-tile',
    styleUrls: ['./tile.component.scss'],
    templateUrl: './tile.component.html'
})
export class TileComponent {
    @Input()
    public letter: ILetter;

    public map(score: number): string {
        return Drink[score];
    }
}
