import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFrom'
})
export class FilterFromPipe implements PipeTransform {
  transform(list: any[] | null, ids: any[] | null): any[] {
    if (list == null) return [];
    if (ids == null) return list;
    return list.filter(item => !ids.some(item2 => item.id == item2.id));
  }
}
