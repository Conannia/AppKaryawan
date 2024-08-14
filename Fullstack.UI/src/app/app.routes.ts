import { Routes } from '@angular/router';
import { KaryawanListComponent } from './components/karyawan/karyawan-list/karyawan-list.component';

export const routes: Routes = [
    {
        path: '',
        component: KaryawanListComponent
    },
    {
        path: 'karyawan',
        component: KaryawanListComponent
    }
];
