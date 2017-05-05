import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h2>{{childSelectedAnimal.name}}</h2>
      <hr>
      <label>Edit Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name" /><br>
      <label>Edit Age:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age" /><br>
      <label>Edit Caretakers:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.caretakers" /><br>
      <button (click)="doneButtonClicked()">Done</button>
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
