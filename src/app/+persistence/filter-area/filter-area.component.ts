import { Component, OnInit } from '@angular/core';
import { filter } from 'right-angled';

import { LookupsService } from '../../shared/index';

@Component({
    selector: 'rt-demo-filter-area',
    styleUrls: ['filter-area.component.scss'],
    templateUrl: 'filter-area.component.html'
})
export class FilterAreaComponent implements OnInit {
    public useAdvancedFilters: boolean = false;
    @filter() public airportName: string = null;
    @filter('airportSize') public selectedAirportSize: string = null;
    @filter('airportType') public selectedAirportType: string = null;
    public airportSizes: any;
    public airportTypes: any;
    constructor(private lookupsService: LookupsService) {
    }
    public ngOnInit(): void {
        this.airportSizes = this.lookupsService.getAirportSizeLookups();
        this.airportTypes = this.lookupsService.getAirportTypeLookups();
    }
    public toggleAdvancedFilters(): void {
        this.useAdvancedFilters = !this.useAdvancedFilters;
    }
}
