import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-service';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingService = inject(HousingService);
  HousingLocation: HousingLocationInfo | undefined;

  constructor() {
    const HousingLocationId = Number(this.route.snapshot.params['id']);
    this.HousingLocation = this.HousingService.getHousingLocationByID(HousingLocationId);
  }
}
