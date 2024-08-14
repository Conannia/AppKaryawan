import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Karyawan } from '../../../models/karyawan.model';

@Component({
  selector: 'app-karyawan-list',
  standalone: true,
  imports: [CommonModule],  // Tambahkan CommonModule di sini
  templateUrl: './karyawan-list.component.html',
  styleUrls: ['./karyawan-list.component.css']
})
export class KaryawanListComponent implements OnInit {

  karyawan: Karyawan[] = [
    {
      id: 1,
      nama: 'Nurul',
      email: 'c@sas.com',
      phone: 121212,
      gaji: 2000000,
      divisi: 'finance',
      level: 'Junior'
    },
    {
      id: 2,
      nama: 'Khusnia',
      email: 'c@sas.com',
      phone: 121212,
      gaji: 15000000,
      divisi: 'finance',
      level: 'Senior'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Logic tambahan jika diperlukan
  }

}
