import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormularioModel } from 'src/app/models/formulario.model';
import { DataServices } from 'src/app/services/data.service';
import { isUri, isHttpUri, isHttpsUri, isWebUri } from 'valid-url'
@Component({
  selector: 'app-formulariosaml',
  templateUrl: './formulariosaml.component.html',
  styleUrls: ['./formulariosaml.component.css'],
})
export class FormulariosamlComponent implements OnInit {
  form: FormGroup;
  registro: FormularioModel;
  selectedFiles: any;
  base64textString: string;
  // positivo: boolean = false;
  campoImagen: boolean = false;
  imagenCargada : any = '';
  test : boolean = false;


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
      orgUrl: ['', [Validators.required]],///^([1-9]|[12]\d
      tiempoProceso: ['', [Validators.required, Validators.pattern('^[1-4]{1}$|^4')]],
      acsUrl: ['', [Validators.required]]
    });
  }
  registrarDatos() {
    if (this.form.invalid) {
      this.toastr.warning('Datos faltantes');
      if (this.form.controls.orgName.invalid) {
        this.toastr.error('Nombre de organización requerido');
      }
      if (this.form.controls.orgUrl.invalid) {
        this.toastr.error('Dominio de la organización requerido');
      }
      if (this.form.controls.tiempoProceso.invalid) {
        this.toastr.error('Ingrese correctamente el tiempo de proceso');
      }
      if (this.form.controls.acsUrl.invalid) {
        this.toastr.error('Ingrese correctamente el ACSURL');
      }
    } else {

      if(isUri(this.form.controls.orgUrl.value) || isHttpUri(this.form.controls.orgUrl.value) || isHttpsUri(this.form.controls.orgUrl.value) || isWebUri(this.form.controls.orgUrl.value)) {
        if (this.form.valid && !!this.imagenCargada) {
          this.toastr.info('Validando datos...');
          this.toastr.info('Por favor espere');
          this.registro = {
            orgName: this.form.controls.orgName.value.replaceAll(' ', ''),
            orgUrl: this.form.controls.orgUrl.value,
            tiempoProceso: this.form.controls.tiempoProceso.value,
            ACSURL: this.form.controls.acsUrl.value,
            image: this.imagenCargada,
          };

         //this.dataService.agregarRegistroNuevo(this.registro);
        } else {
          this.toastr.error('Por favor revisar los datos');
        }

      } else {
        this.toastr.error('Dominio invalido');
      }

    }
  }

  ngOnInit(): void {}
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

      this.toastr.info('Imagen cargada')
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
