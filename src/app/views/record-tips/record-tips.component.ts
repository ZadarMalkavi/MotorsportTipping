import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
    this.dataSource = new ExampleDataSource(driverService);
  }

  ngOnInit() {
  }

}

export interface Driver {  
  position: number;
  points: number;
  Driver : Object;
  Constructor : Object
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private driverService: DriversService) {    
    super();
    this.driverService = driverService;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Driver[]> {
    return this.driverService.getCurrentStandings();
  }

  disconnect() { }
}