import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements AfterViewInit {
  @ViewChild('t1') tabla1!:ElementRef;
  @ViewChild('img') imagen!:ElementRef;
  @ViewChild('t2') tabla2!:ElementRef;

  
  constructor(private render2: Renderer2) { }


  ngAfterViewInit(): void {
    
  }
  

  verAST():void{
    const tablaSimbolos = this.tabla1.nativeElement;
    this.render2.setStyle(tablaSimbolos,'display','none');
    const imagen = this.imagen.nativeElement;
    this.render2.setStyle(imagen,'display','block');
    const tablaS = this.tabla2.nativeElement;
    this.render2.setStyle(tablaS,'display','none');
    
    
  }

  verTS():void{
    const tablaSimbolos = this.tabla1.nativeElement;
    this.render2.setStyle(tablaSimbolos,'display','none');
    const imagen = this.imagen.nativeElement;
    this.render2.setStyle(imagen,'display','none');
    const tablaS = this.tabla2.nativeElement;
    this.render2.setStyle(tablaS,'display','block');
    
    
  }

  verErrores():void{
    const tablaSimbolos = this.tabla1.nativeElement;
    this.render2.setStyle(tablaSimbolos,'display','block');
    const imagen = this.imagen.nativeElement;
    this.render2.setStyle(imagen,'display','none');
    const tablaS = this.tabla2.nativeElement;
    this.render2.setStyle(tablaS,'display','none');
    
    
  }
}
