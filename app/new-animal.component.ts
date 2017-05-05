import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <hr>
    <div>
      <label>Species:</label>
      <input class="form-control" #newSpecies><br>
    </div>
    <div>
      <label>Name:</label>
      <input class="form-control" #newName><br>
    </div>
    <div>
      <label>Age:</label>
      <input class="form-control" type="number" #newAge><br>
    </div>
    <div>
      <label>Diet:</label>
      <input class="form-control" #newDiet><br>
    </div>
    <div>
      <label>Location:</label>
      <input class="form-control" #newLocation><br>
    </div>
    <div>
      <label>Caretakers:</label>
      <input class="form-control" type="number" #newCaretakers><br>
    </div>
    <div>
      <label>Sex:</label>
      <input class="form-control" #newSex><br>
    </div>
    <div>
      <label>Likes:</label>
      <input class="form-control" #newLikes><br>
    </div>
    <div>
      <label>Dislikes:</label>
      <input class="form-control" #newDislikes><br>
    </div>
    <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
