import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as fileSaver from 'file-saver';
import { DataServices } from 'src/app/services/data.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  @Input() Id: string;
  @Input() Nombre: string;
  MensajeIdp: boolean = false;
  Loading: boolean = true;
  MensajeSp: boolean = false;
  metadataIdp: any;
  xmlIdp: any;
  xmlSp: any;
  metadataSp: any;
  metadatas: any;
  parser: any;
  xmlDoc: any;

  constructor(public modal: NgbModal,
    private dataService: DataServices) { }

  ngOnInit(): void {
    this.parser = new DOMParser();
    this.traerMetadata();
  }
  mostrarMetadataIdp() {
    this.MensajeSp = false;
    this.MensajeIdp = true;

  }

  mostrarMetadataSp() {
    this.MensajeIdp = false;
    this.MensajeSp = true;


  }
  ocultarMetadataIdp() {
    this.MensajeIdp = false;
  }

  ocultarMetadataSp() {
    this.MensajeSp = false;
  }

  descargarXMLIdp() {
    let data = new Blob([this.metadataIdp], {type: "text/xml"});
    fileSaver.saveAs(data, `${this.Nombre}-xml-sp.xml`);
  }
  descargarXMLSp() {
    let data = new Blob([this.metadataSp], {type: "text/xml"});
    fileSaver.saveAs(data, `${this.Nombre}-xml-idp.xml`);
  }
  traerMetadata() {

    this.dataService.getMetadatasSaml(this.Id).subscribe((response:any) => {
      try {
        this.metadatas = response;
        this.Loading = false;
        this.metadataIdp = this.metadatas.metadataIdp;
        this.xmlIdp = this.parser.parseFromString(this.metadataIdp, "application/xml");
        this.metadataSp = this.metadatas.metadataSp;
        this.xmlSp = this.parser.parseFromString(this.metadataSp, "application/xml");
      }catch(e) {
        console.log(e)
        return e;
      }
    })


  }

}
