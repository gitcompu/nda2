import { Component, OnInit } from '@angular/core';
import { Party } from '../party';
import { PartyService } from '../party.service';

// ToDo : Create page to enable creating new parties and push in "parties" array as well as save in backend database

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  parties : Party[];
  selectedParties : Party[] = [{id : 20, name : "Party-ZZ", p2pPort : 20005, rpcPort : 20006, webPort : 20007}]; // dummy member. will be removed on first run
  newSel : Party; // have no use but added since list is not painting otherwise
  debug1 : String; // not required. can be removed
  // party : Party = { id : 1000, name : "PartyA" }  ;
  constructor(private partyService: PartyService) { }

  ngOnInit() {
    this.populateParties();
  }

  populateParties(): void {
     this.parties = this.partyService.getParties();
  }

  onSelectParty(party : Party ) : void {
     this.debug1 = "Pushing party " + party.name;
     if( ! this.newSel ) { this.selectedParties = [];} // hack to repaint the party list
     let flag1 = 1; let pt1: Party ;
     this.selectedParties.forEach ( function(curr1, idx1, arr1) { if(curr1.name == party.name) { flag1 = 0;}});
     if( flag1 === 1 ) { this.selectedParties.push(party); }
     this.newSel = party;
  }

}

