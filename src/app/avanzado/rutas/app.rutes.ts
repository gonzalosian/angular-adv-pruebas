import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermadio2/hospital/hospital.component';
import { MedicoComponent } from '../../intermadio2/medico/medico.component';
import { IncrementadorComponent } from '../../intermadio2/incrementador/incrementador.component';


export const RUTAS: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent },
]