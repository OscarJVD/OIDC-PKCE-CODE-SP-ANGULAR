import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices } from 'src/app/services/data.service';

@Component({
  selector: 'app-tablaopenid',
  templateUrl: './tablaopenid.component.html',
  styleUrls: ['./tablaopenid.component.css'],
})
export class TablaopenidComponent implements OnInit {
  tabla: boolean = false;
  spinner: boolean = true;
  res: any[];
  contador: number = 0;
  page: number = 0;
  lambdaDisabled: boolean = false;


  constructor(private dataService: DataServices, public modal: NgbModal) {}
  displayedColumns: string[] = [
    'ID-SP',
    'orgName',
    'orgUrl',
    'clientId',
    'secretId',
    'uris',
  ];

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
    this.dataService.getEntitiesOpenId().subscribe(
      (response: any) => {
        try {
          this.res = response;
          // const finalResult = Object.assign(response.sp[0],response.idp[0]);
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


  // showAndHide(id:any){
  //   var value = (<HTMLInputElement>document.getElementById(`icon${id}`)).value;
  //   console.log(value);
  //   let iconv = (<HTMLInputElement>document.getElementById(`icon${id}`)).value
  //   let icon = (<HTMLInputElement>document.getElementById(`icon${id}`)).className
  //   let inp = (<HTMLInputElement>document.getElementById(`inp${id}`)).type

  //   console.log(iconv);
  //   console.log(icon);
    // console.log(inp);

    // if (inp == 'password') {
    //     inp = 'text'
    //     icon = "fas fa-eye-slash"
    // } else {
    //     inp = 'password'
    //     icon = "fas fa-eye"
    // }
  // }
}
