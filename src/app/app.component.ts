import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-proyecto012';
  nombre = 'juan perez';
  saldo = 100.50;
  porcentaje = 0.23;
  dias = ['domingo', 'lunes' , 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  articulos = [
    {codigo: 1, descripcion: "papas", precio: 10.01},
    {codigo: 2, descripcion: "calabazas", precio: 11.01},
    {codigo: 3, descripcion: "zanahorias", precio: 12},
  ];
  fechaActual = new Date();
  
}
