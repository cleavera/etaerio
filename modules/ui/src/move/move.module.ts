import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
    declarations: [
        ConfirmationComponent
    ],
    exports: [
        ConfirmationComponent
    ]
})
export class MoveModule {}
