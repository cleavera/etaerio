import { $isNull, Maybe } from '@cleavera/utils';
import { Bag, ILetter } from '../../../tile';

export class Hand {
    public tiles: Array<ILetter>;
    public bag: Bag;
    public size: number;

    constructor(bag: Bag, size: number = 12) {
        this.size = size;
        this.bag = bag;
        this.tiles = [];
    }

    public add(tile: ILetter): void {
        this.tiles.push(tile);
    }

    public deal(): void {
        while (this.tiles.length < this.size) {
            this.add(this.bag.draw());
        }
    }

    public play(letter: ILetter): void {
        this.tiles.splice(this.tiles.reduce((index: Maybe<number>, tile: ILetter, i: number): Maybe<number> => {
            if (!$isNull(index)) {
                return index;
            }

            if (tile.id === letter.id) {
                return i;
            }

            return null;
        }, null) as number, 1);
    }
}
