import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avgAge'
})
export class AvgAgePipe implements PipeTransform {

  transform(users: any[]): number {
    return users.reduce((acc, cur) => acc += cur.age, 0) / users.length;
  }

}
