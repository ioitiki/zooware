import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All Aniamls</option>
    <option value="youngAnimal">Young Aniamls</option>
    <option value="matureAnimal">Mature Aniamls</option>
  </select>
  <div *ngIf="filterByAge==='all'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}, {{currentAnimal.species}}</div>
      <div class="panel-body">
        <table class="table table-hover">
          <tbody>
            <tr class="active">
              <td>Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="warning">
              <td>Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="active">
              <td>Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="warning">
              <td>Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="active">
              <td>Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="warning">
              <td>Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="active">
              <td>Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge ==='youngAnimal'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
        <table class="table">
          <tbody>
            <tr class="active">
              <td>Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="warning">
              <td>Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="active">
              <td>Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="warning">
              <td>Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="active">
              <td>Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="warning">
              <td>Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="active">
              <td>Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge==='matureAnimal'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}}, {{currentAnimal.species}}</div>
      <div class="panel-body">
        <table class="table">
          <tbody>
            <tr class="active">
              <td>Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="warning">
              <td>Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="active">
              <td>Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="warning">
              <td>Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="active">
              <td>Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="warning">
              <td>Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="active">
              <td>Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
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
