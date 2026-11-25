import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" name="filter" id="filter" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (location of housingLocations; track location.id) {
        <app-housing-location [housingLocation]="location" />
      }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocations: HousingLocationInfo[] = [
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
}
