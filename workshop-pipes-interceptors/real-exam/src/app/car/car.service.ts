import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${apiUrl}/cars`);
  }

  getCurrentCar(id: string): Observable<ICar> {
    return this.http.get<ICar>(`${apiUrl}/cars?id=${id}`, { withCredentials: true });
  }

  saveCar(data: any): Observable<ICar> {
    return this.http.post<ICar>(`${apiUrl}/cars`, data, { withCredentials: true });
  }

  editCar(data: any, id: string): Observable<ICar> {
    return this.http.put<ICar>(`${apiUrl}/cars/${id}`, data, { withCredentials: true });
  }

  deleteCar(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/cars/${id}`, { withCredentials: true });
  }

}
