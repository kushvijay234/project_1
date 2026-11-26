import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing-service';
import { HousingLocationInfo } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingService = inject(HousingService);
  HousingLocation: HousingLocationInfo | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const HousingLocationId = Number(this.route.snapshot.params['id']);
    this.HousingLocation = this.HousingService.getHousingLocationByID(HousingLocationId);
  }

  submitApplication() {
    this.HousingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
