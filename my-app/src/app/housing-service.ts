import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})


export class HousingService {

  // api
  url = 'http://localhost:3000/locations';

  /* 
  fnx for allow dependencies for access the service data.
  all location data
  */

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json() ?? []);
  }

  /* 
  location data by ID
  */
  async getHousingLocationByID(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    if (!data.ok) {
      return undefined;
    }
    const locationJson = await data.json();
    return locationJson ?? undefined;
  }

  /* 
  form submit 
  */
 submitApplication(firstName: string, lastName: string, email: string) {
  console.log(
          `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
  );
 }
}

