import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppointmentsComponent } from './appointments/appointments.component';
import { AdmissionComponent } from './admission/admission.component';
import { TopicalComponent } from './topical/topical.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HistoriesComponent } from './histories/histories.component';
import { HospitalizationComponent } from './hospitalization/hospitalization.component';
import { UrgencyComponent } from './urgency/urgency.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [UserComponent,AppointmentsComponent, AdmissionComponent, TopicalComponent, CardiologyComponent, MedicineComponent, HistoriesComponent, HospitalizationComponent, UrgencyComponent, EmergencyComponent, LaboratoryComponent, PatientsComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
    ],
})
export class UserModule {}

