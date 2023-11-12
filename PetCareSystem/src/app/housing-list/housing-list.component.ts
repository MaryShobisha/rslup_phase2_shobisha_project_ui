import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import {HousingLocation} from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss']
})
export class HousingListComponent implements OnInit{
  selectedLocation: HousingLocation | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();


  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }


  searchHousingLocations(searchText: string) {
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
            searchText.toLowerCase()
      ));
      if (!searchText) return;
    }

    selectHousingLocation(location: HousingLocation) {
      this.locationSelectedEvent.emit(location);
    }
}


