import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Flash",
    "Aquaman",
    "Iron Man",
    "Spider-Man",
    "Thor",
    "Hulk",
    "Black Widow"
  ];
  public deletedHero?: string;
  removeLastHero():void{
    this.deletedHero= this.heroes.pop();
  }
  

}
