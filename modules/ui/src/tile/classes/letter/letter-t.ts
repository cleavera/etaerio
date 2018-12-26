import { ILetter } from '../../interfaces/letter.interface';

export class LetterT implements ILetter {
    public letter: string = 'T';
    public score: number = 1;
    public id: number = 20;
}
