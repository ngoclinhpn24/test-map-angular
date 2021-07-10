import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 22.4064172;
  lng = 69.0750171;

  zoom = 9;

  // lat2 = 10.0590593;
  // lng2 = 105.7104243;

  public marker:any;
  postData:any;

  //url = 'http://localhost:3000/data';
  onChoseLocation(event: any){
    console.log(event);
    // this.lat = event.coords.lat;
    // this.lng = event.coords.lng;
  }

  constructor(private http: HttpClient){
    //   this.http.post(this.url,this.postData).toPromise().then((data) => {
    //     console.log(data); 
    // });

  }
  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.http.get('/assets/api/place.json').subscribe((data) => {
        this.marker = data; // hiển thị ra màn hình
      });

      // this.http.get(this.url).subscribe((data) => {
      //     console.log(data);
      //     this.marker = data;
      // });
  }
  
  
}
