import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
    selector: 'core-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Output()
    public newGame: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public newHand: EventEmitter<void> = new EventEmitter<void>();

    @HostBinding('class.is-open')
    public isOpen: boolean;

    public restart(): void {
        if (confirm('Are you sure you want to restart, this cannot be undone, all your progress will be lost?')) {
            this.newGame.emit();
        }
    }

    public draw(): void {
        if (confirm('To get a new hand of tiles please consume one shot of your choice')) {
            this.newHand.emit();
        }
    }

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}
