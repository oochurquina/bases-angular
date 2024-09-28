import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Personaje } from "../interfaces/Personaje.interface";

@Component({
    selector:"app-dbz-main-page",
    templateUrl:"./main.page.component.html"
})
export class MainPageComponent{
   constructor(private dbzService: DbzService){}
   get listOfCharacters():Personaje[]{
    return [...this.dbzService.listOfCharacters]
   }
    onDeleteCharacter(id: string):void{
        this.dbzService.deleteCharacterById(id);
    }
    onNewCharacter(character:Personaje): void{
        this.dbzService.addCharacter(character)
    }   

}