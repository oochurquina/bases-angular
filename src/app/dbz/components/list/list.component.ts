import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Personaje } from "../../interfaces/Personaje.interface";

@Component({
  selector: 'app-dbz-list',
  styleUrl: './list.component.css',
  templateUrl:'./list.component.html'
})
export class ListComponent{
  @Output()
  public onDelete : EventEmitter<string>= new EventEmitter();
  @Input('listOfCharacters') list: Personaje[]=[];

  onDeleteCharacter(id:string):void{
      this.onDelete.emit(id)
  }

}