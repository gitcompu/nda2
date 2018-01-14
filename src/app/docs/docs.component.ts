import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Doc } from '../doc';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docs : Doc[];
  constructor(private docService: DocService) { }

  ngOnInit() {
     this.populateDocs();
  }

  populateDocs() : void {
     this.docs = this.docService.getDocs();
  }

}
