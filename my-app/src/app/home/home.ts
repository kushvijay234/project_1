import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing-service';

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
  housingLocations: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
  }

}
