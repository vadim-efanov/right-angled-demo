import { Component } from '@angular/core';
import { RtSelectionService } from 'right-angled';

@Component({
    selector: 'rt-demo-nested-button',
    template: `<button class="btn btn-primary" title="Get selected items" (click)="displaySelectedItems()">Get selected items</button>`
})
export class NestedButtonComponent {
    constructor(public selectionService: RtSelectionService) {
    }
    public displaySelectedItems(): void {
        alertify.alert(this.selectionService.getSelectedElements().map((c: any) => c.name).join(';'));
    }
}
