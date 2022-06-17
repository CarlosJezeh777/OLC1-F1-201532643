import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  URL = "http://localhost:3000"
  constructor(private http:HttpClient) { 
  }

  public getData(){
    return this.http.get(`${this.URL}/enviar`);
  }

  public setData(json:any){
    return this.http.post(`${this.URL}/recibir`,json);
  }
}
