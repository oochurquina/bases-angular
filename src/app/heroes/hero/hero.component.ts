import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = 'Ironman';
  public edad: number = 34;  

  changeEdad():void {
    this.edad=45;
  throw new Error('Method not implemented.');
  }
  changeName():void {
    this.nombre='Spiderman'
  throw new Error('Method not implemented.');

  }
  reset():void{
    this.nombre='Ironman';
    this.edad= 34
  }
  get capitalizeName():string{
    return this.nombre.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.nombre} - ${this.edad}`
  }
}
