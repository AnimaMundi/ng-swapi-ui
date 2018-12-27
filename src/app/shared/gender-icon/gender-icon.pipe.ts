import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '@shared/models';

@Pipe({
  name: 'genderIcon'
})
export class GenderIconPipe implements PipeTransform {
  public transform(value: Gender): string {
    const genderIcon = this.getGenderIcon(value);
    return `fas fa-${genderIcon}`;
  }

  private getGenderIcon(gender: Gender): string {
    switch (gender) {
      default:
      case Gender.Male:
        return 'mars';
      case Gender.Female:
        return 'venus';
      case Gender.None:
        return 'genderless';
    }
  }
}
