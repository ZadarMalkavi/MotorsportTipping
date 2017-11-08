import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-record-tips',
  templateUrl: './record-tips.component.html',
  styleUrls: ['./record-tips.component.css']
})

export class RecordTipsComponent implements OnInit {

  displayedColumns = ['position', 'name', 'team', 'points'];
  dataSource;

  constructor(private driverService: DriversService) {
    this.dataSource = new RecordTipsDataSource(driverService);
  }

  ngOnInit() {
  }

}

export interface Driver {
  position: string;
  points: number;
  Driver: Object;
  Constructors: Array<Object>,
  currentConstructor: Object
}

export class RecordTipsDataSource extends DataSource<any> {
  constructor(private driverService: DriversService) {
    super();
    this.driverService = driverService;
  }

  connect(): Observable<Driver[]> {   
    // Get the data needed for the table 
    let responses: Array<Observable<any[]>> = [];
    responses.push(this.driverService.getCurrentStandings());
    responses.push(this.driverService.getCurrentDrivers());

    // Combine the two data sets into one array of Driver
    return Observable.forkJoin(responses)
      .map(response => {
        //Modify the two responses once they are avalible into a single dataset
        var standings = response[0];
        var drivers = response[1];

        // Combined set
        var combination: Driver[] = [];

        // Loop over arrays and find matching entries
        for (let driver of drivers) {
          for (let standing of standings) {
            //The key identifier in both arrays is driverId
            if (standing.Driver.driverId === driver.driverId) {
              //Merge the two objects as a Driver
              var item = Object.assign({}, driver, standing) as Driver;
              //Add a new field for the drivers current constructor/team (they can have multiple in a season)
              item.currentConstructor = item.Constructors[item.Constructors.length - 1];
              //Add to combined array
              combination.push(item);
            }
          }
        }

        //Sort into position in driver championship
        combination = combination.sort((a, b) => {
          return parseInt(a.position) > parseInt(b.position) ? 1 : -1;
        });

        //Return the combined array of Drivers
        return combination;
      });
  }

  disconnect() { }
}