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
    <option value="meatAnimal">Meat Eating Animals</option>
  </select>
  <div *ngIf="filterByAge==='all'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}} ({{currentAnimal.species}})<button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" id="edit" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button></div>
      <div class="panel-body">
        <table class="table table-hover table-bordered">
          <tbody>
            <tr class="warning">
              <td class="td-label">Name:</td>
              <td>{{currentAnimal.name}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Species:</td>
              <td>{{currentAnimal.species}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge ==='youngAnimal'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}} ({{currentAnimal.species}})<button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" id="edit" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button></div>
      <div class="panel-body">
        <table class="table table-hover table-bordered">
          <tbody>
            <tr class="warning">
              <td class="td-label">Name:</td>
              <td>{{currentAnimal.name}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Species:</td>
              <td>{{currentAnimal.species}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge==='matureAnimal'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}} ({{currentAnimal.species}})<button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" id="edit" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button></div>
      <div class="panel-body">
        <table class="table table-hover table-bordered">
          <tbody>
            <tr class="warning">
              <td class="td-label">Name:</td>
              <td>{{currentAnimal.name}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Species:</td>
              <td>{{currentAnimal.species}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByAge ==='meatAnimal'">
    <div class="panel panel-danger" *ngFor="let currentAnimal of childAnimalList | agePipe:filterByAge">
      <div class="panel-heading">{{currentAnimal.name}} ({{currentAnimal.species}})<button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" id="edit" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button></div>
      <div class="panel-body">
        <table class="table table-hover table-bordered">
          <tbody>
            <tr class="warning">
              <td class="td-label">Name:</td>
              <td>{{currentAnimal.name}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Species:</td>
              <td>{{currentAnimal.species}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Age:</td>
              <td>{{currentAnimal.age}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Diet:</td>
              <td>{{currentAnimal.diet}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Location:</td>
              <td>{{currentAnimal.location}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Caretakers:</td>
              <td>{{currentAnimal.caretakers}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Sex:</td>
              <td>{{currentAnimal.sex}}</td>
            </tr>
            <tr class="active">
              <td class="td-label">Likes:</td>
              <td>{{currentAnimal.likes}}</td>
            </tr>
            <tr class="warning">
              <td class="td-label">Dislikes:</td>
              <td>{{currentAnimal.dislikes}}</td>
            </tr>
          </tbody>
        </table>
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModalNorm">Edit Animal</button>
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
