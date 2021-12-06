import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  @Input() secret: string;


  constructor(private toastr: ToastrService,
    private clipboard: Clipboard) { }

  ngOnInit(): void {
  }
  copytoclipboard() {
    this.clipboard.copy(this.secret);
    this.toastr.success('¡Secret copiado al portapapeles!')
  }
}
