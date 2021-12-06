import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { DataServices } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tablasaml',
  templateUrl: './tablasaml.component.html',
  styleUrls: ['./tablasaml.component.css'],
})
export class TablasamlComponent implements OnInit {
  tabla: boolean = false;
  spinner: boolean = true;
  entity: Entity[];
  page: number = 0;
  lambdaDisabled: boolean = false;
  constructor(public modal: NgbModal, public dataService: DataServices) {}

  ngOnInit(): void {
    this.getEntities();
  }
  nextPage() {
    this.page += 10;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 10;
    }
  }
  getEntities() {
    this.dataService.getEntitiesSaml().subscribe(
      (response: any) => {
        try {
          this.entity = response as Entity[];

          this.spinner = false;
          this.tabla = true;
        } catch (e) {
          return e;
        }
      },
      (error: any) => {
        console.log(error);
        console.log('No se traen datos');
        this.lambdaDisabled = true;
        this.spinner = false;
      }
    );
  }
}
