import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DriversService {
  currentStandingsURL = 'http://ergast.com/api/f1/current/driverStandings.json';
  currentDriversURL = 'http://ergast.com/api/f1/current/last/drivers.json';

  constructor(private http: HttpClient) { }

  getCurrentStandings = function () {
    return this.http.get(this.currentStandingsURL).map(result => {
      return result.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }

  getCurrentDrivers = function () {
    return this.http.get(this.currentDriversURL).map(result => {
      return result.MRData.DriverTable.Drivers;
    });
  }

}
