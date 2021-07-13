import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// interface City {
//   center: google.maps.LatLngLiteral;
//   radius: number;
// }

export class AppComponent implements OnInit {
  title = 'My first AGM project';
  lat = 21.027763;
  lng = 105.834160;
  zoom = 9;

  // lat2 = 10.0590593;
  // lng2 = 105.7104243;

  public marker:any;
  
  //parsedJson: any;
  postData: any;
  stringifyJson: any;

  url = 'http://localhost:3000/data';
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
      
      // this.http.get('/assets/api/place.json').subscribe((data) => {
      //   this.marker = data; // hiển thị ra màn hình
      // });


      // HTTP post request
      // this.http.post<any>(this.url,{address: 'Trung Quốc', lat: '35.861660', lng: '104.195396', radius: '120'}).subscribe((data) => {
      //    console.log(data); 
      //   this.postData = data;
      // });


      // HTTP get Request
      this.http.get(this.url).subscribe((data) => {

        // Object data
        console.log(data);
        this.marker = data; // hiện ra màn hình

        

        // Convert to JSON

        this.stringifyJson = JSON.stringify(data);  
        //console.log("With Stringify: " , this.stringifyJson);  

        // Parse from JSON

        var parsedJson = JSON.parse(this.stringifyJson);  
        console.log("Parse JSON: " , parsedJson);  

        var locat = parsedJson[0];
        console.log("Location1: ", locat);
        console.log("Address: ", locat.address);
        // this.parsedJson = JSON.parse(this.stringifyJson);  
        //  console.log("With Parsed JSON :" , this.parsedJson);  

        var map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            zoom: 4,
            center: { lat: 21.027763, lng: 105.834160 },
            mapTypeId: "terrain",
          }
        );

        const circle = new google.maps.Circle({
          map: map,
          center: new google.maps.LatLng(21.027763, 105.83416),
          radius: 8000

        }
        
        );
        // for (const city in this.marker) {
        //   // Add the circle for this city to the map.
        //   const cityCircle = new google.maps.Circle({
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#FF0000",
        //     fillOpacity: 0.35,
        //     map,
        //     center: this.marker[city].center,
        //     radius: this.marker[city].radius
        //   });
        // }


    });

  }
  
  
}
