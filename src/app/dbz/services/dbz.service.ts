import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interface';
import { v4 as uuid} from 'uuid'
@Injectable({providedIn: 'root'})
export class DbzService {
    
    constructor() { }
    public listOfCharacters: Personaje[]=[
        { id: uuid(),nombre: 'Goku', poder: 15000, raza: 'Saiyan' },
        { id: uuid(),nombre: 'Vegeta', poder: 14000, raza: 'Saiyan' },
        { id: uuid(),nombre: 'Piccolo', poder: 8000, raza: 'Namekiano' },
        { id: uuid(),nombre: 'Gohan', poder: 12000, raza: 'Saiyan' },
        { id: uuid(),nombre: 'Frieza', poder: 20000, raza: 'Changeling' },
        { id: uuid(),nombre: 'Krillin', poder: 5000, raza: 'Humano' },
        { id: uuid(),nombre: 'Trunks', poder: 13000, raza: 'Saiyan' },
        { id: uuid(),nombre: 'Majin Buu', poder: 18000, raza: 'Majin' },
        { id: uuid(),nombre: 'Cell', poder: 16000, raza: 'Bio-Android' }
    ];
    addCharacter(character: Personaje ):void{
        const newCharacter:Personaje={
            ...character,
            id: uuid()
        }
        this.listOfCharacters.push(newCharacter);

    }
    deleteCharacterById(id:string):void{
        this.listOfCharacters= this.listOfCharacters.filter(character=>character.id!==id)
    }

    
}