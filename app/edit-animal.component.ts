import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="modal fade" id="myModalNorm" tabindex="-1" role="dialog"v aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div *ngIf="childSelectedAnimal">
              <h2>{{childSelectedAnimal.name}}</h2>
              <label>Edit Name:</label>
              <input [(ngModel)]="childSelectedAnimal.name" /><br>
              <label>Edit Age:</label>
              <input type="number" [(ngModel)]="childSelectedAnimal.age" /><br>
              <label>Edit Caretakers:</label>
              <input type="number" [(ngModel)]="childSelectedAnimal.caretakers" /><br>
            </div>
            <button type="button" class="btn btn-primary" (click)="doneButtonClicked()" data-dismiss="modal">
                Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
