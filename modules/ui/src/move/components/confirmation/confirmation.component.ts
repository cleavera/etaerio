import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'move-confirmation',
    styleUrls: ['./confirmation.component.scss'],
    templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent {
    @Output()
    public cancel: EventEmitter<void> = new EventEmitter();

    @Output()
    public confirm: EventEmitter<void> = new EventEmitter();

    public onCancel(): void {
        this.cancel.emit();
    }

    public onConfirm(): void {
        this.confirm.emit();
    }
}
