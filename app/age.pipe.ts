import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "agePipe",
  pure: false
})


export class AgePipe implements PipeTransform {

  transform(input: Animal[], desiredAge){
    var output: Animal[] = [];
    if (desiredAge === "all") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    } else if (desiredAge === "youngAnimal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
    } else if (desiredAge === "matureAnimal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2){
          output.push(input[i]);
        }
      }
    } else if (desiredAge === "meatAnimal") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet.toLowerCase() !== "herbivore"){
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
