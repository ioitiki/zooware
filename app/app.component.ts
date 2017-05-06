import { Component } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar bg-primary">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="/"><img src="./resources/images/logo.png" id="home-icon" /></a>
        </div>
        <a href="./about.html"><button class="btn navbar-right" id="about">About</button></a>
        <a href="/"><img src="./resources/images/title.png" class="center-block"/></a>
      </div>
    </nav>
    <div class="container">
      <button class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModalNew">Add Animal</button>
      <hr>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade and playing in the open", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises"),
    new Animal("Black Bear", "Joshy", 1, "Omnivore", "Northern Trail", 3, "Female", "Insects, leaves, and berries", "People or bright lights")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
