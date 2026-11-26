import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})


export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // Data
  housingLocationsList: HousingLocationInfo[] = [
    {
      id: 1,
      name: 'Cozy Mountain Retreat',
      city: 'Aspen',
      state: 'CO',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: 'Sunny City Apartment',
      city: 'Denver',
      state: 'CO',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: false,
    },
    {
      id: 3,
      name: 'Quiet Lakeside Home',
      city: 'Boulder',
      state: 'CO',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 3,
      wifi: false,
      laundry: true,
    },
    {
      id: 4,
      name: 'Family Garden House',
      city: 'Aurora',
      state: 'CO',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
  ];

  /* 
  fnx for allow dependencies for access the service data.
  all location data
  */

  getAllHousingLocations() : HousingLocationInfo[] {
    return this.housingLocationsList;
  }

  /* 
  location data by ID
  */
  getHousingLocationByID(id: number): HousingLocationInfo | undefined {
    return this.housingLocationsList.find((housingLocation) => housingLocation.id === id);
  }
}
