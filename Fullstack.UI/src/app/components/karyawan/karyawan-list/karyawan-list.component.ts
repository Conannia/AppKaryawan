import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient dan HttpClientModule
import { Karyawan } from '../../../models/karyawan.model';

@Component({
  selector: 'app-karyawan-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // Tambahkan HttpClientModule di sini
  templateUrl: './karyawan-list.component.html',
  styleUrls: ['./karyawan-list.component.css']
})
export class KaryawanListComponent implements OnInit {

  karyawan: Karyawan[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Karyawan[]>('https://localhost:7273/api/controller')
      .subscribe(
        (data) => {
          this.karyawan = data;  // Mengisi array karyawan dengan data dari API
        },
        (error) => {
          console.error('Error fetching karyawan data:', error);
        }
      );
  }

}
