import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ILetter } from '../../../tile';
import { Square } from '../../classes/square/square';
import { ModifierType } from '../../constants/modifier-type.constant';

@Component({
    selector: 'board-square',
    styleUrls: ['./square.component.scss'],
    templateUrl: './square.component.html'
})
export class SquareComponent {
    @Input()
    public square: Square;

    @Input()
    public tile: ILetter;

    @Output()
    public select: EventEmitter<void> = new EventEmitter<void>();

    @HostBinding('class.is-start')
    public get isStart(): boolean {
        return this.square.isRootTile;
    }

    @HostBinding('class.is-doubleLetter')
    public get isDoubleLetter(): boolean {
        return this.square.modifier.type === ModifierType.LETTER && this.square.modifier.value === 2;
    }

    @HostBinding('class.is-tripleLetter')
    public get isTripleLetter(): boolean {
        return this.square.modifier.type === ModifierType.LETTER && this.square.modifier.value === 3;
    }

    @HostBinding('class.is-doubleWord')
    public get isDoubleWord(): boolean {
        return this.square.modifier.type === ModifierType.WORD && this.square.modifier.value === 2;
    }

    @HostBinding('class.is-tripleWord')
    public get isTripleWord(): boolean {
        return this.square.modifier.type === ModifierType.WORD && this.square.modifier.value === 3;
    }

    public get points(): number {
        let points: number = this.tile.score;

        if (this.square.modifier.type === ModifierType.LETTER) {
            points *= this.square.modifier.value;
        }

        return points;
    }

    public onSelect(): void {
        if (this.tile) {
            return;
        }

        this.select.emit();
    }
}
