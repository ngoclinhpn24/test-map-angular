import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 9.8372633;
  lng = 105.5193633;

  zoom = 9;
  
  lat2 = 9.8368873;
  lng2 = 105.5169083;

  onChoseLocation(event: any){
    console.log(event);
    // this.lat = event.coords.lat;
    // this.lng = event.coords.lng;
  }

  markers = [
    {
      lat: 21.1594627,
      lng: 72.6822083,
      label: 'Surat' },
    
    { 
      lat: 23.0204978,
      lng: 72.4396548,
      label: 'Ahmedabad'},

    {
      lat: 22.2736308,
      lng: 70.7512555,
      label: 'Rajkot'}  ];
}
