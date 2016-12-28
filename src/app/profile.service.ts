import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  private profiles: Profile[] = [
    new Profile('Default Profile', ['New York', 'London', 'Berlin'])
  ];
  constructor() { }

  saveNewProfile(cities: string[]) {
    const profileName = 'Profile' + this.profiles.length;
    const profile = new Profile(profileName, cities);
    this.profiles.push(profile);
  }

  getProfiles() {
    return this.profiles;
  }

}
