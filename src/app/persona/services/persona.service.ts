import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _persona: string[] = ['Persona'];
  
  get personas(): string[] {
    return [ ...this._persona];
  }

  constructor() { }
}
