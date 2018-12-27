import { ModifierType } from '../../constants/modifier-type.constant';
import { IModifier } from '../../interfaces/modifier.interface';

export class Modifier implements IModifier {
    public type: ModifierType;
    public value: 1 | 2 | 3;

    private constructor(value: 1 | 2 | 3, type: ModifierType) {
        this.value = value;
        this.type = type;
    }

    public serialize(): string {
        return (((this.type - 1) * 3) + (this.value - 1)).toString(36);
    }

    public static None(): Modifier {
        return new Modifier(1, ModifierType.NONE); // 0
    }

    public static DoubleLetter(): Modifier {
        return new Modifier(2, ModifierType.LETTER); // 1
    }

    public static TripleLetter(): Modifier {
        return new Modifier(3, ModifierType.LETTER); // 2
    }

    public static DoubleWord(): Modifier {
        return new Modifier(2, ModifierType.WORD); // 3
    }

    public static TripleWord(): Modifier {
        return new Modifier(3, ModifierType.WORD); // 4
    }

    public static Deserialize(id: string): Modifier {
        if (id === '1') {
            return this.DoubleLetter();
        }

        if (id === '2') {
            return this.TripleLetter();
        }

        if (id === '3') {
            return this.DoubleWord();
        }

        if (id === '4') {
            return this.TripleWord();
        }

        return this.None();
    }
}
