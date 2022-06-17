import { JsonpInterceptor } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  data :any = {
  }
  recibido: any= {}
  
  constructor(
    private ConexionServices: ConexionService,
    private rendered2:  Renderer2,
    
    ) {

     }

  ngOnInit(): void {
  }
  public ejecutar(){
    this.recibido = {respuest: ""}
    this.enviarData(this.data);        
  }
  
  

  public recibirData():any{  
    this.ConexionServices.getData().subscribe(
      (res)=>{ 
        let re = JSON.stringify(res);
        
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  public enviarData(data:any){

    this.ConexionServices.setData(data).subscribe(
      (res)=>{
        console.log(res);
        
        this.recibido = res
        
        alert("si se pudo")
      },
      (error)=>{
          console.log(error);
          
      }
    )}

  }


