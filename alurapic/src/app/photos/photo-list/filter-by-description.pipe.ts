import { Pipe, PipeTransform } from '@angular/core';

import { Photos } from '../photo/photo';

@Pipe({
  name: 'FilterByDescription',
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: Photos, descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
