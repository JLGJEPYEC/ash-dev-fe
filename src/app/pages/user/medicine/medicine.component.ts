import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  
  now!: Date;
  dni!: number;
  name !: string;
  lastname!: string ;
  id_history!: string;
  enabled: boolean = false;
  controlDni!: FormControl;
  controlSpecialty!: FormControl;
  controlMedic!: FormControl; 
  controlDate !: FormControl;
  controlSchedule !: FormControl;
  selectedPerson!:string;

  constructor() { }


  
searchEnsured(event: Event){
    
  for (let i = 0; i < ENSUREDS_DATA.length; i++) {
    if(ENSUREDS_DATA[i].dni==this.controlDni.value){
      this.name = ENSUREDS_DATA[i].name;
      this.lastname = ENSUREDS_DATA[i].lastname_p + " "  + ENSUREDS_DATA[i].lastname_m;
      this.dni = ENSUREDS_DATA[i].dni;
      console.log(this.now.getFullYear());
      this.id_history = ENSUREDS_DATA[i].id_history;
      this.enabled=true;
      console.log(this.id_history);
      this.selectedPerson= this.name + " " + this.lastname;
      //console.log(this.selectedPerson);
      return;
    }else{
      this.name = "";
      this.lastname = "";
      this.dni = 0;
      this.id_history = "";
    }
  }
}


  ngOnInit(): void {
  }
  color: ThemePalette = 'primary';
}

