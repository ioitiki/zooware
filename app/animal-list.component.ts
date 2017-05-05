import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'animal-list',
  template: `
  <select class="selectpicker" (change)="onChange($event.target.value)">
    <option value="all">All Aniamls</option>
    <option value="youngAnimal">Young Aniamls</option>
    <option value="matureAnimal">Mature Aniamls</option>
  </select>
  <div *ngIf="filterByAge==='all'">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}, {{currentAnimal.species}}</div>
      <div class="panel-body">
        <ul>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge ==='youngAnimal'">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
        <ul>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge==='matureAnimal'">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
        <ul>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge = 'all';

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
