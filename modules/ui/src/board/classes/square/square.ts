import { ISerializable, Maybe } from '@cleavera/utils';
import { ILetter } from '../../interfaces/letter.interface';
import { IModifier } from '../../interfaces/modifier.interface';
import { Modifier } from '../modifier/modifier';

export class Square implements ISerializable {
    public tile: Maybe<ILetter>;
    public modifier: IModifier;

    constructor(modifier: IModifier) {
        this.modifier = modifier;
    }

    public serialize(): string {
        return '';
    }

    public static Blank(): Square {
        return new Square(Modifier.None());
    }

    public static DoubleLetter(): Square {
        return new Square(Modifier.DoubleLetter());
    }

    public static TripleLetter(): Square {
        return new Square(Modifier.TripleLetter());
    }

    public static DoubleWord(): Square {
        return new Square(Modifier.DoubleWord());
    }

    public static TripleWord(): Square {
        return new Square(Modifier.TripleWord());
    }
}
