import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
})
export class PaginatePipe implements PipeTransform {
  transform(registro: any[], page: number = 0): any[] {
    return registro.slice(page, page + 10);
  }
}
