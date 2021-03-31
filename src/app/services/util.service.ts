import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getYearsOfExperience() {
    let exp = (new Date().getMonth() -
      new Date(2018, 11, 29).getMonth() +
      12 * (new Date().getFullYear() - new Date(2018, 11, 29).getFullYear())) /
      12;
    return parseFloat(<string><unknown>exp).toFixed(2);
  }
}
