import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocal',
  templateUrl: './geolocal.component.html',
  styleUrls: ['./geolocal.component.css']
})

export class GeolocalComponent implements OnInit {

  latitude: number = 0;
  longitude: number = 0;

  constructor() { }

  ngOnInit(){
    this.getLocation();
  }

getLocation(){
    


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position)=> {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude; 
      },
      (error)=>{
        console.error('Error getting location: ', error);
      }
      );
      }else{
        console.error('Geolocation is not supported by this browser. ');

      }
    }
  }