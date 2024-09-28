import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Personaje>=new EventEmitter;
  public character: Personaje={
    id:'',
    nombre: '',
    poder: 0,
    raza: ''
  };

  emitCharacter():void{
    console.log(this.character);
    // debugger;
    if (this.character.nombre.length===0) return;
    this.onNewCharacter.emit({...this.character});

    this.character.nombre='';
    this.character.poder=0;
    this.character.raza='';
  }

}
