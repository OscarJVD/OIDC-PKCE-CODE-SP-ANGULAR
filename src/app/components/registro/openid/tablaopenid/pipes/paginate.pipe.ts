import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from 'src/app/models/entity';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(registro: Entity[], page: number = 0): Entity[] {
    
    return registro.slice(page, page+10);
}
}