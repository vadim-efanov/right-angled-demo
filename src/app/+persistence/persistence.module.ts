import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdditionalFilterComponent } from './additional-filter/additional-filter.component';
import { FilterAreaComponent } from './filter-area/filter-area.component';
import { PersistenceSampleComponent } from './persistence-sample/persistence-sample.component';
import { PersistenceComponent } from './persistence.component';

@NgModule({
    declarations: [PersistenceComponent, FilterAreaComponent, AdditionalFilterComponent, PersistenceSampleComponent],
    exports: [PersistenceComponent, FilterAreaComponent, AdditionalFilterComponent, PersistenceSampleComponent],
    imports: [CommonModule, RouterModule, SharedModule]
})
export class PersistenceModule {
}
