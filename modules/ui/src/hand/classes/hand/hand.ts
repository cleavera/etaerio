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

    public deal(): void {
        while (this.tiles.length <= this.size) {
            this.tiles.push(this.bag.draw());
        }
    }
}
