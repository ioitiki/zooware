import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './Animal.model';


@Component({
  selector: 'new-Animal',
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
    <button class="btn btn-default" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newIbu.value, newQuantity.value, newDescription.value, newType.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newIbu.value=''; newQuantity.value=''; newDescription.value=''; newType.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcohol_content: number, ibu: number, quantity: number, description: string, type: string) {
    var newAnimalToAdd: Animal = new Animal(name, brand, price, alcohol_content, ibu, quantity, description, type);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
