import { ILetter } from '../../interfaces/letter.interface';

export class LetterBlank implements ILetter {
    public letter: string = '';
    public score: number = 0;
    public id: number = 27;
}
