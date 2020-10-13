import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ LoadingSpinnerComponent ],
    exports: [ LoadingSpinnerComponent ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class LoadingSpinnerModule {}
