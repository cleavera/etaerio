import { IDict, ISerializable } from '@cleavera/utils/dist';
import { ILetter } from '../../interfaces/letter.interface';
import { Letter } from '../letter';
import { LetterFactory } from '../letter/letter.factory';

export class Bag implements ISerializable {
    public letters: Array<ILetter>;

    constructor(letters: Array<ILetter> = Bag._generateBag()) {
        this.letters = letters;
    }

    public draw(): ILetter {
        if (!this.letters.length) {
            this.letters = Bag._generateBag();
        }

        const index: number = Math.floor(Math.random() * this.letters.length);

        return this.letters.splice(index, 1)[0];
    }

    public serialize(): string {
        return JSON.stringify({
            l: this.letters.map((letter: ILetter) => {
                return letter.id;
            })
        });
    }

    public static Deserialize(value: string): Bag {
        const serial: IDict<Array<number>> = JSON.parse(value);

        return new Bag(serial.l.map((letter: number) => {
            return LetterFactory.FromId(letter);
        }));
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
