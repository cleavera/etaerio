import { ILetter } from '../../interfaces/letter.interface';

export class LetterI implements ILetter {
    public letter: string = 'I';
    public score: number = 1;
    public id: number = 9;
}
