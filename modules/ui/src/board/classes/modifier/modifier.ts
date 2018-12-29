import { ModifierType } from '../../constants/modifier-type.constant';
import { IModifier } from '../../interfaces/modifier.interface';
import { SModifier } from '../../interfaces/modifier.serialized';

export class Modifier implements IModifier {
    public type: ModifierType;
    public value: 1 | 2 | 3;

    private constructor(value: 1 | 2 | 3, type: ModifierType) {
        this.value = value;
        this.type = type;
    }

    public serialize(): SModifier {
        return {
            t: this.type,
            v: this.value
        };
    }

    public isDoubleLetter(): boolean {
        return this.type === ModifierType.LETTER && this.value === 2;
    }

    public isTripleLetter(): boolean {
        return this.type === ModifierType.LETTER && this.value === 3;
    }

    public isDoubleWord(): boolean {
        return this.type === ModifierType.WORD && this.value === 2;
    }

    public isTripleWord(): boolean {
        return this.type === ModifierType.WORD && this.value === 3;
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

    public static Deserialize(serial: SModifier): Modifier {
        return new Modifier(serial.v, serial.t);
    }
}
