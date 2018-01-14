import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PartyService } from './party.service';
import { PeerService } from './peer.service';
import { DocService } from './doc.service';

import { AppComponent } from './app.component';
import { PartiesComponent } from './parties/parties.component';
import { PeersComponent } from './peers/peers.component';
import { DocsComponent } from './docs/docs.component';


@NgModule({
  declarations: [
    AppComponent,
    PartiesComponent,
    PeersComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PartyService, PeerService, DocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
