import { ILetter } from '../../interfaces/letter.interface';
import { Letter } from './index';

export class LetterFactory {
    public static FromId(id: number): ILetter {
        for (const letter in Letter) {
            if (!Letter.hasOwnProperty(letter)) {
                continue;
            }

            const l: ILetter = new (Letter as any)[letter]();

            if (l.id === id) {
                return l;
            }
        }

        throw new Error('Invalid ID');
    }
}
