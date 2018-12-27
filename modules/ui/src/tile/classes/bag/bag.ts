import { ILetter } from '../../interfaces/letter.interface';
import { Letter } from '../letter';

export class Bag {
    public letters: Array<ILetter>;

    constructor() {
        this.letters = Bag._generateBag();
    }

    public draw(): ILetter {
        if (!this.letters.length) {
            this.letters = Bag._generateBag();
        }

        const index: number = Math.floor(Math.random() * this.letters.length);

        return this.letters.splice(index)[0];
    }

    private static _generateBag(): Array<ILetter> {
        return [
            new Letter.A(),
            new Letter.A(),
            new Letter.A(),
            new Letter.A(),
            new Letter.A(),
            new Letter.A(),
            new Letter.A(),
            new Letter.B(),
            new Letter.B(),
            new Letter.C(),
            new Letter.C(),
            new Letter.D(),
            new Letter.D(),
            new Letter.D(),
            new Letter.D(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.E(),
            new Letter.F(),
            new Letter.F(),
            new Letter.G(),
            new Letter.G(),
            new Letter.G(),
            new Letter.H(),
            new Letter.H(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.I(),
            new Letter.J(),
            new Letter.K(),
            new Letter.L(),
            new Letter.L(),
            new Letter.L(),
            new Letter.L(),
            new Letter.M(),
            new Letter.M(),
            new Letter.N(),
            new Letter.N(),
            new Letter.N(),
            new Letter.N(),
            new Letter.N(),
            new Letter.N(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.O(),
            new Letter.P(),
            new Letter.P(),
            new Letter.Q(),
            new Letter.R(),
            new Letter.R(),
            new Letter.R(),
            new Letter.R(),
            new Letter.R(),
            new Letter.R(),
            new Letter.S(),
            new Letter.S(),
            new Letter.S(),
            new Letter.S(),
            new Letter.T(),
            new Letter.T(),
            new Letter.T(),
            new Letter.T(),
            new Letter.T(),
            new Letter.T(),
            new Letter.U(),
            new Letter.U(),
            new Letter.U(),
            new Letter.U(),
            new Letter.V(),
            new Letter.V(),
            new Letter.W(),
            new Letter.W(),
            new Letter.X(),
            new Letter.Y(),
            new Letter.Y(),
            new Letter.Z(),
            new Letter.BLANK(),
            new Letter.BLANK()
        ];
    }
}
