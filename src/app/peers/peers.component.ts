import { Component, OnInit } from '@angular/core';
import { PeerService } from '../peer.service';
import { Party } from '../party';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.css']
})
export class PeersComponent implements OnInit {
  peers : Party[];
  constructor(private peerService:PeerService) { }

  ngOnInit() {
    this.populatePeers();
  }

  populatePeers(): void {
     this.peers = this.peerService.getPeers();
  }

}
