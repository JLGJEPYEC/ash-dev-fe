import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HistoriesComponent } from './histories/histories.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AdmissionComponent } from './admission/admission.component';
import { TopicalComponent } from './topical/topical.component';
import { MedicineComponent } from './medicine/medicine.component';
import { UserDetailComponent } from '../admin/users/user-detail/user-detail.component';
import { HospitalizationComponent } from './hospitalization/hospitalization.component';
import { UrgencyComponent } from './urgency/urgency.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { PatientsComponent } from './patients/patients.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
            path: 'histories',
            component: HistoriesComponent,
            },
            {
            path: 'appointments',
            component: AppointmentsComponent,
            },
            {
            path: 'dashboard',
            component: DashboardComponent,  
            },
            {
            path: 'admission',
            component: AdmissionComponent,
            },
            {
            path: 'topical',
            component: TopicalComponent,
            },
            {
            path: 'medicine',
            component: MedicineComponent,
            },
            {
            path: 'cardiology',
            component: CardiologyComponent,
            },
            {
            path: 'user-detail',
            component: UserDetailComponent,
            },
            {
            path: 'hospitalization',
            component: HospitalizationComponent,
            },
            {
            path: 'urgency',
            component: UrgencyComponent,
            },
            {
            path: 'emergency',
            component: EmergencyComponent,
            },
            {
            path: 'laboratory',
            component: LaboratoryComponent,
            },
            {
            path: 'patients',
            component: PatientsComponent,
            },
          ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
