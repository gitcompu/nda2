import { Injectable } from '@angular/core';
import { Party } from './party';
import { PARTIES } from './mock-parties';

@Injectable()
export class PartyService {

  constructor() { }
  getParties(): Party[] {
    return(PARTIES); // ToDo : This should fetch parties from database or web service
  }

}
