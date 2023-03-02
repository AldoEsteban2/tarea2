import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    //persona: [ '', Validators.required ],
    nombre:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)] ],
    apellido:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)] ],
    edad:      ['', [Validators.required, Validators.min(18), Validators.max(65)]] 
  })

  // Llena selectores
  persona: string[] = [];

  constructor( private fb: FormBuilder,
               private personaService: PersonaService ) { }


  ngOnInit(): void {
    this.persona = this.personaService.personas;
  }

  guardar() {
    
    console.log(this.miFormulario.value)
  }

}
