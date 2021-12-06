import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormularioOpenIdModel } from 'src/app/models/formularioopenid.model';
import { DataServices } from 'src/app/services/data.service';
@Component({
  selector: 'app-formularioopenid',
  templateUrl: './formularioopenid.component.html',
  styleUrls: ['./formularioopenid.component.css'],
})
export class FormularioopenidComponent implements OnInit {
  form: FormGroup;
  registro: FormularioOpenIdModel;
  selectedFiles: any;
  base64textString: string;
  campoImagen: boolean = false;
  imagenCargada: any = '';
  test: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dataService: DataServices
  ) {
    this.buildForm();
    this.toastr.info('Datos requeridos *');
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      orgName: ['', [Validators.required]],
      orgUrl: ['', [Validators.required]],
      acsUrl: ['', [Validators.required]],
      image: ['', []],
    });
  }

  ngOnInit(): void {}

  registrarDatos() {
    if (this.form.invalid) {
      this.toastr.warning('¡Datos faltantes o invalidos!');

      if (this.form.controls.orgName) {
        this.toastr.warning('Nombre de organización requerido');
      }
      if (this.form.controls.orgUrl.invalid) {
        this.toastr.warning('Dominio de organización requerido');
      }
      if (this.form.controls.acsUrl.invalid) {
        this.toastr.warning('ACS requerido');
      }
      if (this.form.controls.image.invalid) {
        this.toastr.warning('Favicon requerido');
      }
    } else {
      if (this.form.valid && !!this.imagenCargada) {
        this.toastr.info('Validando datos...');
        this.toastr.info('Por favor espere');
        this.registro = {
          orgName: this.form.controls.orgName.value.replaceAll(' ', ''),
          orgUrl: this.form.controls.orgUrl.value,
          ACSURL: this.form.controls.acsUrl.value,
          image: this.imagenCargada,
        };
      }
      this.dataService.agregarRegistroNuevoOpenId(this.registro);
    }
  }
  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.imagenCargada = this.base64textString;
  }
  onFileSelected(event: any) {
    this.selectedFiles = event.target.files[0];
    if (this.selectedFiles) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.selectedFiles);

      this.toastr.info('Imagen cargada');
    }
  }

  positive(): void {
    this.test = true;
    this.campoImagen = false;
    this.imagenCargada = 'null';
  }

  negative(): void {
    this.test = false;
    this.campoImagen = true;
  }
}
