import { Injectable } from '@angular/core';
import { Doc } from './doc';
import { DOCS } from './mock-docs';

@Injectable()
export class DocService {

  constructor() { }
  getDocs(): Doc[] {
    return(DOCS); // ToDo : The "DOCS" must be retrieved from database/web service
  }

}
