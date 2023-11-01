import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adaptTile',
})
export class AdaptTilePipe implements PipeTransform {
  transform(value: string): string {
    const titleWords = value.split(' ');
    const gifWordIndex = titleWords.findIndex((word) => word === 'GIF');
    const adaptedTitle = titleWords.slice(0, gifWordIndex).join(' ');
    return adaptedTitle;
  }
}
