import { Injectable } from '@angular/core';
import { Party } from './party';
import { PARTIES } from './mock-parties';

@Injectable()
export class PeerService {
  constructor() { }
  // getPeers(party:Party): Party[]
  getPeers(): Party[] { // ToDo : This must accept a param of type "Party" whose peers it should return
    return(PARTIES); // ToDo : This should fetch parties from corda web service
  }

}
