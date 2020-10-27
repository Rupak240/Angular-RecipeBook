import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggingService } from '../logging.service';

import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './Loading-spinner/loading-spinner.component';
import { PlaceholderDirectice } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirectice,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirectice,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}
