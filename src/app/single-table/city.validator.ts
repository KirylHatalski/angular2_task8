import '../shared/interfaces'

import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { DataStorageService } from '../shared/services/data_storage.service';


@Directive({
  selector: '[validateCity][ngModel],[validateCity][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CityValidator), multi: true }
  ]
})

export class CityValidator {
  validator: Function;

  constructor(private dataStor: DataStorageService ) {
    this.validator = this.checkList();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  checkList(){
    return (c: FormControl) => {
      return (this.dataStor.selectedNames.length) ? null : {
          valid: false
      };
    }
  }

}
