import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" name="filter" id="filter" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocations of filteredLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocations" />
      }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  housingLocations: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocations: HousingLocationInfo[]) => {
        this.housingLocations = housingLocations;
        this.filteredLocationList = housingLocations;
        this.changeDetectorRef.markForCheck();
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocations;
      return;
    }

    this.filteredLocationList = this.housingLocations.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }

}
